import { GraphTokenFactory } from '@graphprotocol/contracts'

export const getInterface = () => {  
  const inter = GraphTokenFactory.getInterface()
  console.log(`interface ${inter}`)
  return inter
}

getInterface()