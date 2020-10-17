#!/usr/bin/env node
import chalk from "chalk";
import Commander from "commander";
import path from "path";
import prompts from "prompts";
import updateCheck from "update-check";

import packageJson from "../package.json";
import { createEthApp } from "./createEthApp";
import { validateNpmName } from "./helpers/validatePkg";

let projectPath: string = "";

const program: Commander.Command = new Commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .usage(`${chalk.green("<project-directory>")} [options]`)
  .action(name => {
    projectPath = name;
  })
  .option(
    "-f, --framework <name>",
    `
  The UI framework to bootstrap the app with. You can use a framework from the official Create Eth App repo. The default is React.
`,
  )
  .option(
    "-t, --template <name>",
    `
  A custom template to bootstrap the app with. You can use a template from the official Create Eth App repo.
`,
  )
  .allowUnknownOption()
  .parse(process.argv);

async function run() {
  if (typeof projectPath === "string") {
    projectPath = projectPath.trim();
  }

  if (!projectPath) {
    const res: prompts.Answers<string> = await prompts({
      initial: "my-app",
      message: "What is your project named?",
      name: "path",
      type: "text",
      validate: (name: string) => {
        const validation: { valid: boolean; problems?: string[] } = validateNpmName(path.basename(path.resolve(name)));
        if (validation.valid) {
          return true;
        }

        if (validation.problems && validation.problems[0]) {
          return "Invalid project name: " + validation.problems[0];
        } else {
          return "Invalid project name";
        }
      },
    });

    if (typeof res.path === "string") {
      projectPath = res.path.trim();
    }
  }

  if (!projectPath) {
    console.log();
    console.log("Please specify the project directory:");
    console.log(`  ${chalk.cyan(program.name())} ${chalk.green("<project-directory>")}`);
    console.log();
    console.log("For example:");
    console.log(`  ${chalk.cyan(program.name())} ${chalk.green("my-eth-app")}`);
    console.log();
    console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`);
    process.exit(1);
  }

  const resolvedProjectPath = path.resolve(projectPath);
  const projectName = path.basename(resolvedProjectPath);

  const { problems, valid } = validateNpmName(projectName);
  if (!valid) {
    console.error(
      `Could not create a project called ${chalk.red(`"${projectName}"`)} because of npm naming restrictions:`,
    );

    if (problems) {
      problems.forEach((problem: string) => console.error(`    ${chalk.red.bold("*")} ${problem}`));
    }
    process.exit(1);
  }

  await createEthApp({
    appPath: resolvedProjectPath,
    framework: (typeof program.framework === "string" && program.framework.trim()) || undefined,
    template: (typeof program.template === "string" && program.template.trim()) || undefined,
  });
}

const update = updateCheck(packageJson).catch(() => null);

async function notifyUpdate() {
  try {
    const res: { latest: boolean } = await update;
    if (res?.latest) {
      console.log();
      console.log(chalk.yellow.bold("A new version of `create-eth-app` is available!"));
      console.log("You can update by running: yarn global add create-eth-app");
      console.log();
    }
  } catch {
    /* Ignore error */
  }
}

run()
  .then(notifyUpdate)
  .catch(async reason => {
    console.log();
    console.log("Aborting installation.");

    if (reason.command) {
      console.log(`  ${chalk.cyan(reason.command)} has failed.`);
    } else {
      console.log(chalk.red("Unexpected error. Please report it as a bug:"));
      console.log(reason);
    }
    console.log();

    await notifyUpdate();

    process.exit(1);
  });
