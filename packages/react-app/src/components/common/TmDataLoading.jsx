import React from 'react'
import './TmDataLoading.scoped.css'

const TmDataLoading = ({loading, src, alt}) => {

  return (
    <div className={`spinner-container ${loading ? '' : 'hide'}`}>
      <img
        className="spinner"
        src={src || "/img/spinner_blue@256.gif"}
        alt={ alt || "a small spinning circle to display loading"}
      />
    </div>
  )
}

export default TmDataLoading