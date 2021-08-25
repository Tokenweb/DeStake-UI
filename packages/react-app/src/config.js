export const CHAIN_IDS = {
  1337: 'Ganache Local',
  42: 'Kovan',
};

const ENVS = {
  DEV: {
    chainId: 1337,
    networkName: 'Ganache Local',
    chainEndpoint: process.env.REACT_APP_LOCAL_CHAIN_ENDPOINT,
    algernonAddress: '0x26950f5d5B2eA2AC11d8A2cB67a62D8831Be3d8F',
    algerTokenAddress: '0x98012ed413Bc79B2A2fc1420FDC90670aAb96B61',
    theGraphNetworkSubgraph:
      'https://api.thegraph.com/subgraphs/name/ministry-of-decentralization/graph-network-rinkby',
  },
  KOVAN: {
    chainId: 42,
    networkName: 'Kovan',
    chainEndpoint: process.env.REACT_APP_KOVAN_CHAIN_ENDPOINT,
    algernonAddress: '0xE494E00411D49cfb6466391c5aA0166505fEe6B7',
    algerTokenAddress: '0xDC904045490Fd90415B3299373A4741B15393fD5',
    theGraphNetworkSubgraph:
      'https://api.thegraph.com/subgraphs/name/ministry-of-decentralization/graph-network-rinkby',
  },
};

export default ENVS[process.env.REACT_APP_DESTAKE_ENV];
