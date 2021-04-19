import React, { createContext, useReducer, useMemo } from 'react'

const UPDATE_TYPES = {
  SET_WALLET: 'SET_WALLET',
  CLEAR_WALLET: 'CLEAR_WALLET'
}

const initialState = {
  walletType: null,
  address: null,
  provider: null,
  GRTInstance: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_TYPES.SET_WALLET:
      return {
          ...state,
          walletType: action.payload.walletType,
          wallet: action.payload.wallet,
          address: action.payload.address,
          provider: action.payload.provider,
          GRTInstance: action.payload.GRTInstance

        }
    case UPDATE_TYPES.CLEAR_WALLET:
      return {
          ...initialState
  
        }
    default:
      return state
  }
}

export const WalletContext = createContext(null)

const WalletProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return {
      ...state,
      setWallet: ({ walletType, wallet, address, provider, GRTInstance }) =>
        dispatch({
          type: UPDATE_TYPES.SET_WALLET,
          payload: {
            walletType,
            wallet,
            address,
            provider,
            GRTInstance
          }
        }),
      clearWallet: () =>
        dispatch({
          type: UPDATE_TYPES.CLEAR_WALLET,
          payload: {}
        })
    };
  }, [state, dispatch]);

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  )
}

export default WalletProvider