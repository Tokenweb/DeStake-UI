import React from 'react';
import { GraphAccountView } from '../../types/theGraphProtocol';
import './BalanceRow.scoped.css';

// interface FiatValue {
//   amount: number
//   denom: string
// }

const TOKEN_SYMBOLS: { [index: string]: string } = {
  THE_GRAPH_TOKEN: 'GRT',
};

const getTokenSymbol = (token: string) => TOKEN_SYMBOLS[token];

const getCurrencyIconSrc = (token: string) => {
  const symbol = getTokenSymbol(token);
  return symbol != null
    ? `/img/icons/currencies/${symbol.toLowerCase()}.png`
    : null;
};

const BalanceRow = ({ account }: { account: GraphAccountView }) => {
  const tokenSymbol = getTokenSymbol('THE_GRAPH_TOKEN');
  return (
    <div className='balance-row'>
      <div className='table-cell big'>
        <img
          className='currency-flag'
          src={getCurrencyIconSrc('THE_GRAPH_TOKEN') || ''}
          alt={`${tokenSymbol} currency`}
        />
        <div className='total-and-fiat'>
          <span className='total'>
            {account.balanceDisplay}
            GRT
          </span>
        </div>
      </div>

      <div className='table-cell rewards'>
        <h2>
          +
          {account.delegator
            ? account.delegator.totalRealizedRewardsDisplay
            : '-'}
          GRT
        </h2>
        <h2>0</h2>
      </div>

      <div className='table-cell available'>
        <span className='available-amount'>
          {account.delegator
            ? account.delegator.totalUnstakedTokensDisplay
            : '-'}
        </span>
      </div>
    </div>
  );
};

export default BalanceRow;
