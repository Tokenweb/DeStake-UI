import React from 'react'
import { Link } from 'react-router-dom';
import './AppMenu.scoped.css'
import { MdChevronRight } from 'react-icons/md'

const AppMenu = () => {
  
  return (
    <div>
      <menu className="app-menu">
        <div>
          <Link to={`/portfolio`}
            className="app-menu-item hide-s"
            title="Portfolio"
          >
            <h2 className="app-menu-title">Portfolio</h2>
            <span className="material-icons notranslate"><MdChevronRight /></span>
          </Link>
          <Link to={`/validators`}
            className="app-menu-item hide-s"
            title="Validators"
          >
            <h2 className="app-menu-title">Validators</h2>
            <span className="material-icons notranslate"><MdChevronRight /></span>
          </Link>
          <Link to={`/prposals`}
            className="app-menu-item hide-s"
            title="Proposals"
          >
            <h2 className="app-menu-title">Proposals</h2>
            <span className="material-icons notranslate"><MdChevronRight /></span>
          </Link>

          <Link to={`transactions`}
            className="app-menu-item hide-s"
            title="Transactions"
          >
            <h2 className="app-menu-title">Transactions</h2>
            <span className="material-icons notranslate"><MdChevronRight /></span>
          </Link>

          <Link to="/about"
            className="app-menu-item hide-m"
            title="About"
          >
            <h2 className="app-menu-title">About</h2>
          </Link>

          <Link to="/terms"
            className="app-menu-item hide-m"
            title="Terms"
          >
            <h2 className="app-menu-title">Terms of Service</h2>
          </Link>

          <Link to="/privacy"
            className="app-menu-item hide-m"
            title="Privacy"
          >
            <h2 className="app-menu-title">Privacy Policy</h2>
          </Link>
        </div>
      </menu>
    </div>
  )
}

export default AppMenu
