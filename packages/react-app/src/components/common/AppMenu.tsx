import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './AppMenu.scoped.css';
import { MdChevronRight } from 'react-icons/md';
import { WalletContext } from '../providers/WalletProvider';

const AppMenu = () => {
  const { address } = useContext(WalletContext);
  return (
    <div>
      <menu className='app-menu'>
        <div>
          {address != null ? (
            <Link
              to={`/portfolio/${address}`}
              className='app-menu-item hide-s'
              title='Portfolio'
            >
              <h2 className='app-menu-title'>Portfolio</h2>
              <span className='material-icons notranslate'>
                <MdChevronRight />
              </span>
            </Link>
          ) : null}
          <Link
            to={`/validators`}
            className='app-menu-item hide-s'
            title='Validators'
          >
            <h2 className='app-menu-title'>Validators</h2>
            <span className='material-icons notranslate'>
              <MdChevronRight />
            </span>
          </Link>
          <Link
            to={`/proposals`}
            className='app-menu-item hide-s'
            title='Proposals'
          >
            <h2 className='app-menu-title'>Proposals</h2>
            <span className='material-icons notranslate'>
              <MdChevronRight />
            </span>
          </Link>

          <Link
            to={`transactions`}
            className='app-menu-item hide-s'
            title='Transactions'
          >
            <h2 className='app-menu-title'>Transactions</h2>
            <span className='material-icons notranslate'>
              <MdChevronRight />
            </span>
          </Link>

          <Link to='/about' className='app-menu-item hide-m' title='About'>
            <h2 className='app-menu-title'>About</h2>
          </Link>

          <Link to='/terms' className='app-menu-item hide-m' title='Terms'>
            <h2 className='app-menu-title'>Terms of Service</h2>
          </Link>

          <Link to='/privacy' className='app-menu-item hide-m' title='Privacy'>
            <h2 className='app-menu-title'>Privacy Policy</h2>
          </Link>
        </div>
      </menu>
    </div>
  );
};

export default AppMenu;
