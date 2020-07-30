/**
 * See all ids below
 * https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
 */
export const GOERLI_ID = 5;
export const KOVAN_ID = 42;
export const MAINNET_ID = 1;
export const RINKEBY_ID = 4;
export const ROPSTEN_ID = 3;

export default {
  [GOERLI_ID]: {
    comptroller: "0x627EA49279FD0dE89186A58b8758aD02B6Be2867",
    priceOracle: "0xd0c84453b3945cd7e84BF7fc53BfFd6718913B71",
    timelock: "0x25e46957363e16C4e2D5F2854b062475F9f8d287",
    tokens: {
      COMP: "0xe16C7165C8FeA64069802aE4c4c9C320783f2b6e",
      cBAT: "0xc31211101e6D98bEA24F1f32cbeBa3e9ac7c9749",
      cDAI: "0xd9fd9E875c9C1d567825E431DD6Ed4f0e51aA8Bf",
      cETH: "0x2B2aA9c7967eFAd4B73BFD8801333928806409A1",
      cREP: "0x0812e50F3740b89899Ce889C2ab913eA2565f626",
      cUSDC: "0xD9FFe966A831089981Bd1539503c9d3cb45E5AAb",
      cWBTC: "0xe43d693C6d063BDF4A9681f9A6D9D1439344f4f7",
      cZRX: "0xf412f4d0eE1D96eb486C6C2836bEDc4912bA294E",
    },
  },
  [KOVAN_ID]: {
    comptroller: "0x5eAe89DC1C671724A672ff0630122ee834098657",
    governance: "0x665a5f09716d63D9256934855b0CE2056a5C4Cf8",
    priceOracle: "0x37ac0cb24b5DA520B653A5D94cFF26EB08d4Dc02",
    timelock: "0xE3e07F4F3E2F5A5286a99b9b8DEed08B8e07550B",
    tokens: {
      COMP: "0x61460874a7196d6a22D1eE4922473664b3E95270",
      cBAT: "0xd5ff020f970462816fDD31a603Cb7D120E48376E",
      cDAI: "0xe7bc397DBd069fC7d0109C0636d06888bb50668c",
      cETH: "0xf92FbE0D3C0dcDAE407923b2Ac17eC223b1084E4",
      cREP: "0xFd874BE7e6733bDc6Dca9c7CDd97c225ec235D39",
      cUSDC: "0xcfC9bB230F00bFFDB560fCe2428b4E05F3442E35",
      cUSDT: "0x3f0A0EA2f86baE6362CF9799B523BA06647Da018",
      cWBTC: "0x3659728876EfB2780f498Ce829C5b076e496E0e3",
      cZRX: "0xC014DC10A57aC78350C5fddB26Bb66f1Cb0960a0",
    },
  },
  [MAINNET_ID]: {
    comptroller: "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
    governance: "0xc0dA01a04C3f3E0be433606045bB7017A7323E38",
    priceOracle: "0xDDc46a3B076aec7ab3Fc37420A8eDd2959764Ec4",
    timelock: "0x6d903f6003cca6255D85CcA4D3B5E5146dC33925",
    tokens: {
      COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
      DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      cBAT: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
      cDAI: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
      cETH: "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
      cREP: "0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1",
      cSAI: "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC",
      cUSDC: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
      cUSDT: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
      cWBTC: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
      cZRX: "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
    },
  },
  [RINKEBY_ID]: {
    comptroller: "0x2EAa9D77AE4D8f9cdD9FAAcd44016E746485bddb",
    priceOracle: "0x5722A3F60fa4F0EC5120DCD6C386289A4758D1b2",
    timelock: "0xe4cD9a61431FbD268ea842D68533561262C17513",
    tokens: {
      cBAT: "0xEBf1A11532b93a529b5bC942B4bAA98647913002",
      cDAI: "0x6D7F0754FFeb405d23C51CE938289d4835bE3b14",
      cETH: "0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e",
      cREP: "0xEBe09eB3411D18F4FF8D859e096C533CAC5c6B60",
      cUSDC: "0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1",
      cUSDT: "0x2fB298BDbeF468638AD6653FF8376575ea41e768",
      cWBTC: "0x0014F450B8Ae7708593F4A46F8fa6E5D50620F96",
      cZRX: "0x52201ff1720134bBbBB2f6BC97Bf3715490EC19B",
    },
  },
  [ROPSTEN_ID]: {
    comptroller: "0x54188bBeDD7b68228fa89CbDDa5e3e930459C6c6",
    governance: "0x93ACbA9ecaCeC21BFA09b0C4650Be3596713d747",
    priceOracle: "0xb2b3d5B4E35881D518fa2062325F118A6Ebb6C4A",
    timelock: "0x0a278Af3Cf0f5ba7a22133f0C165F6dE2DCdf689",
    tokens: {
      COMP: "0x1Fe16De955718CFAb7A44605458AB023838C2793",
      cBAT: "0xA253295eC2157B8b69C44b2cb35360016DAa25b1",
      cDAI: "0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF",
      cETH: "0x1d70B01A2C3e3B2e56FcdcEfe50d5c5d70109a5D",
      cREP: "0x5D4373F8C1AF21C391aD7eC755762D8dD3CCA809",
      cSAI: "0xCCaF265E7492c0d9b7C2f0018bf6382Ba7f0148D",
      cUSDC: "0x20572e4c090f15667cF7378e16FaD2eA0e2f3EfF",
      cUSDT: "0x135669c2dcBd63F639582b313883F101a4497F76",
      cWBTC: "0x4D15eE7DE1f86248c986f5AE7dCE855b1c1A8806",
      cZRX: "0x3A728dD027AD6F76Cdea227d5Cf5ba7ce9390A3d",
    },
  },
};
