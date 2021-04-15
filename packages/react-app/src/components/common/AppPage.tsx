import React from 'react'
import AppHeader from './AppHeader'
import UserMenu from '../account/UserMenu'
import TmDataLoading from './TmDataLoading'

const AppPage = ({children, loading}: {children: any, loading: any}) => {
  const themeClass = 'lunie-light'

  return (
    <div id="app" className={`${themeClass} page`}>
      <TmDataLoading {...loading} />
      <AppHeader />
      <div id="app-content">
        <div id="bar-container">
        </div>
        <UserMenu
          user={null}
          address={null}
          sessionType={null}
          ledgerAddressError={null}
        />
        <div className='page-content'>
          {children}
        </div>
      </div>
  
    </div>

  )
}

export default AppPage