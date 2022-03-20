import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Bar = ({ barType, show, hideClose, link, linkCaption }) => {
  const className = css`
    .bar-container {
      margin: 0.5rem;
    }

    .bar {
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      font-family: var(--sans);
      background-color: transparent;
      font-size: 14px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--menu-bright);
    }

    .bar.primary {
      background-color: var(--primary);
    }

    .bar.success {
      background-color: var(--success);
    }

    .bar.warning {
      background-color: var(--warning);
    }

    .bar.danger {
      background-color: var(--danger);
    }

    .bar.info {
      background-color: var(--info);
    }

    .bar .link {
      text-decoration: underline;
      color: var(--menu-bright);
      cursor: pointer;
    }

    .bar .button {
      background-color: transparent;
      color: var(--menu-bright);
      border-radius: 5px;
      padding: 0.1rem 0.5rem;
      cursor: pointer;
    }

    .right {
      display: flex;
      align-items: center;
    }

    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .close-icon {
      cursor: pointer;
      font-size: 18px;
      padding-left: 1rem;
    }

    @media screen and (max-width: 667px) {
      .bar {
        align-items: baseline;
      }

      .left {
        flex-direction: column;
        align-items: baseline;
      }

      .left p {
        padding-bottom: 1rem;
      }
    }
  `;

  return (
    <div className={`${className.styles} ${show ? '' : 'hide'}`}>
      <div className='bar-container'>
        <div className={`bar ${barType}`}>
          <div className='left'>
            <p>
              <slot />
            </p>
            {linkCaption && (
              <Link to={link}>
                <TmBtn
                  className='button small'
                  value={linkCaption}
                  type='button'
                />
              </Link>
            )}
          </div>
          {!hideClose && (
            <div className='right'>
              <i
                className='material-icons notranslate close-icon'
                onClick={close}
              >
                close
              </i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bar;
