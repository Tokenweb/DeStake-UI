import { ethers }  from 'ethers'

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export const capitalizeFirstLetter = function (toCap: string) {
  return toCap.charAt(0).toUpperCase() + toCap.slice(1)
}

export const convertToChecksum = (address: string) => ethers.utils.getAddress(address)
