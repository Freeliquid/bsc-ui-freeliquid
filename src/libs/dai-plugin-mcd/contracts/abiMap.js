// not run through babel, so we must use an ES5-safe export
module.exports = {
  REP: require('./abis/REP.json'),
  ZRX: require('./abis/ZRX.json'),
  OMG: require('./abis/OMG.json'),
  BAT: require('./abis/BAT.json'),
  DGD: require('./abis/DGD.json'),
  KNC: require('./abis/KNC.json'),
  GNT: require('./abis/GNT.json'),
  SAI: require('./abis/DSToken.json'),
  CDP_MANAGER: require('./abis/DssCdpManager.json'),
  ETH: require('./abis/WETH9_.json'),
  GET_CDPS: require('./abis/GetCdps.json'),
  MCD_ADM: require('./abis/DSRoles.json'),
  MCD_CAT: require('./abis/Cat.json'),
  MCD_DAI: require('./abis/DSToken.json'),
  MCD_DAI_GUARD: require('./abis/DSGuard.json'),
  MCD_DEPLOY: require('./abis/DssDeploy.json'),
  MCD_FLAP: require('./abis/Flapper.json'),
  'MCD_FLIP_*': require('./abis/Flipper.json'),
  MCD_FLOP: require('./abis/Flopper.json'),
  MCD_GOV: require('./abis/DSToken.json'),
  'MCD_JOIN_*': require('./abis/GemJoin.json'),
  MCD_JOIN_OMG_A: require('./abis/GemJoin2.json'),
  MCD_JOIN_DGD_A: require('./abis/GemJoin2.json'),
  MCD_JOIN_GNT_A: require('./abis/GemJoin4.json'),
  MCD_JOIN_DAI: require('./abis/DaiJoin.json'),
  MCD_JUG: require('./abis/Jug.json'),
  MCD_END: require('./abis/End.json'),
  MCD_ESM: require('./abis/ESM.json'),
  MCD_PAUSE: require('./abis/DSPause.json'),
  MCD_PAUSE_PROXY: require('./abis/Plan.json'),
  MCD_POT: require('./abis/Pot.json'),
  MCD_SPOT: require('./abis/Spotter.json'),
  MCD_VAT: require('./abis/Vat.json'),
  MCD_VOW: require('./abis/Vow.json'),
  MULTICALL: require('./abis/MultiCall.json'),
  'PIP_*': require('./abis/DSValue.json'),
  PROXY_ACTIONS: require('./abis/DssProxyActions.json'),
  PROXY_ACTIONS_DSR: require('./abis/DssProxyActionsDsr.json'),
  PROXY_ACTIONS_REWARD: require('./abis/RewardProxyActions.json'),
  MIGRATION: require('./abis/ScdMcdMigration.json'),
  MIGRATION_PROXY_ACTIONS: require('./abis/MigrationProxyActions.json'),
  USDC: require('./abis/USDC.json'),
  WBTC: require('./abis/WBTC.json'),
  TUSD: require('./abis/DSToken.json'),
  MANA: require('./abis/DSToken.json'),
  BUSDDAI: require('./abis/DSToken.json'),
  BUSDUSDT: require('./abis/DSToken.json'),
  BUSDUSDC: require('./abis/DSToken.json'),
  UNI_ROUTER: require('./abis/UniRouter.json'),
  FL_STATS: require('./abis/CollateralStat.json'),
  FL_REWARDER: require('./abis/StakingRewards.json'),
  FL_REWARDER_GOV_USD: require('./abis/StakingRewardsDecay.json'),
  FL_REWARDER_STABLES: require('./abis/StakingRewardsDecay.json'),
  FL_REWARDER_GOV_USD_HOLDER: require('./abis/StakingRewardsDecayHolder.json'),
  FL_REWARDER_STABLES_HOLDER: require('./abis/StakingRewardsDecayHolder.json'),
  FL_REWARD_AGGREGATOR: require('./abis/RewardDecayAggregator.json')
};
