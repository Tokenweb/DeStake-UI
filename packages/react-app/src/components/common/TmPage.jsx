import React from 'react'
import { css } from '@emotion/react'
import TmDataLoading from './TmDataLoading'

const TmPage = (props) => {
  const className = css`
    .page {
      position: relative;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 1rem 0 0;
    }
    
    .loading-image-container {
      padding: 2em;
    }
    
    .readable-width {
      max-width: 720px;
    }
    
    .page.dark-background {
      background: var(--app-fg);
    }
    
    .column {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: normal;
      width: 100%;
    }
    
    .row {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 2rem 0 1rem;
    }
    
    .page-profile__section {
      margin-bottom: 1rem;
    }
    
    .page-profile__section-title {
      margin: 0 0 0.25rem 1rem;
      color: var(--dim);
      font-size: var(--sm);
      font-weight: 500;
    }
    
    li {
      width: 100%;
      padding: 1rem;
      border-bottom: 1px solid var(--bc-dim);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    li:last-child {
      border-bottom: none;
    }
    
    h4 {
      color: var(--txt);
      font-size: var(--sm);
      margin-bottom: 2px;
      font-weight: 500;
    }
    
    .row span {
      color: var(--bright);
      font-size: var(--sm);
      font-weight: 400;
      line-height: 1rem;
    }
    
    @media screen and (max-width: 1024px) {
      .page {
        margin: 0 auto 6rem;
      }
    }
    
    @media screen and (max-width: 667px) {
      .page {
        padding-bottom: 4rem;
      }
    }
  `
  return (
    <div className={`${className} page`}>

      <TmDataLoading {...props.loading} />


    </div>
  )
}

export default TmPage
