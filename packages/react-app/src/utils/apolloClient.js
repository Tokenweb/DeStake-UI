import ApolloClient from 'apollo-boost';
import config from '../config'

export const theGraphNetworkClient = new ApolloClient({
  uri: config.theGraphNetworkSubgraph
})
