import React from 'react'
import AppPage from '../common/AppPage'
import GraphAccountBalance from '../account/GraphAccountBalance'

const Portfolio = ({match}) => {
  const urlAddress = match.params.address
  return (
    <AppPage>
 
        <GraphAccountBalance urlAddress={urlAddress}/>
 
    </AppPage>

  )
}

export default Portfolio