import bech32 from 'bech32';

const getAddressType = (address) => {
  if (address.startsWith('0x')) return 'ethereum';
  try {
    bech32.decode(address);
    return 'cosmos';
  } catch (error) {
    // ignore error
  }
  return 'any';
};

export const formatAddress = (address, length = 4) => {
  if (!address) {
    return `Address Not Found`;
  }
  switch (getAddressType(address)) {
    case 'cosmos':
      return address.split(`1`)[0] + `…` + address.slice(-1 * length);
    case 'ethereum':
      return address.slice(0, 2 + length) + `…` + address.slice(-1 * length);
    case 'any':
      return address.slice(0, length) + `…` + address.slice(-1 * length);
    default:
      return address.slice(0, length) + `…` + address.slice(-1 * length);
  }
};
