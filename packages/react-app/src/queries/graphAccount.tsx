import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { theGraphNetworkClient } from '../utils/apolloClient';
import { GraphAccount } from '../types/theGraphProtocol';
import { selectGraphAccount } from '../selectors/graphAccount';

interface GetGraphAccount {
  graphAccount: GraphAccount;
}

interface GraphAccountQueryVars {
  address: string;
}

export const GET_GRAPH_ACCOUNT = gql`
  query tag($address: String!) {
    graphAccount(id: $address) {
      id
      balance
      curationApproval
      stakingApproval
      gnsApproval
      delegator {
        id
        totalStakedTokens
        totalUnstakedTokens
        totalRealizedRewards
      }
      curator {
        id
        totalSignalledTokens
        totalUnsignalledTokens
        totalWithdrawnTokens
        realizedRewards
        annualizedReturn
        totalReturn
      }
    }
  }
`;

export const useGetGraphAccount = (address: string) => {
  const lowerAddress = address
    .split('')
    .map((f) => f.toLowerCase())
    .join('');
  const { loading, error, data } = useQuery<
    GetGraphAccount,
    GraphAccountQueryVars
  >(GET_GRAPH_ACCOUNT, {
    client: theGraphNetworkClient,
    variables: { address: lowerAddress },
    fetchPolicy: 'no-cache',
  });
  console.log(data);
  return {
    loading,
    error,
    // @ts-ignore
    account: data?.graphAccount ? selectGraphAccount(data.graphAccount) : null,
  };
};
