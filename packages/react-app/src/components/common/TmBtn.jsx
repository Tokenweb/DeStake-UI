import React from 'react'
import './TmButton.scoped.css'
const TmBtn = ({ value, type, size, loading, centered, disabled, customClass }) => {

const svg = (
  <svg
  v-if="loading"
  width="24"
  height="24"
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  stroke="#8c8fa6"
>
  <g fill="none" fill-rule="evenodd">
    <g transform="translate(1 1)" stroke-width="2">
      <circle stroke="white" stroke-opacity=".2" cx="18" cy="18" r="18" />
      <path stroke="white" d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </g>
</svg>
)
const buttonClass = customClass ?
  customClass + ' button'
  :
  `button ${type === 'secondary' ? 'secondary' : ''} ${size === 'small' ? 'small' : ''} ${type} ${loading ? 'loading' : ''} ${centered ? 'centered' : ''}`

return (
  <span>
    <button
      className={buttonClass}
      disabled={!!disabled}
    >
      {svg}
      {value &&
        <template>
          { value }
        </template>
      }
    </button>
  </span>
  )
}

export default TmBtn
