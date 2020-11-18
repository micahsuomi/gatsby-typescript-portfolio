import React, { useState } from 'react'
import { Link } from 'gatsby'

import { HeaderProps } from '../../types'

import headerStyles from './styles.module.scss'
import './styles.css'

const headerActive = {
  borderBottom: '3px solid #22225c',
}
const borderToggleBarClicked = {
  border: '1px solid white',
  borderRadius: '500px',
}

const borderToggleBarUnclicked = {
  border: 'none',
}

const styleClicked = {
  backgroundColor: 'white',
}

const styleUnclicked = {
  backgroundColor: 'black',
}

const Header = ({ siteTitle }: HeaderProps) => {
  const [isClicked, setState] = useState(false)
  const navList = 'nav-list'
  const navListOpen = 'nav-list open'

  const lineClassOne = 'line top'
  const lineClassOneActive = 'line top active'

  const lineClassTwo = 'line middle'
  const lineClassTwoActive = 'line middle active'

  const lineClassThree = 'line bottom'
  const lineClassThreeActive = 'line bottom active'

  const toggle = () => {
    setState(!isClicked)
  }

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.title}>
        <Link to="/" className={headerStyles.titleLink}>
          {siteTitle.toUpperCase()}
        </Link>
      </div>
      <nav>
        <div className={headerStyles.toggleWrapper}>
          <div
            className={headerStyles.toggleBar}
            onClick={toggle}
            style={
              isClicked ? borderToggleBarClicked : borderToggleBarUnclicked
            }
          >
            <span
              className={isClicked ? lineClassOneActive : lineClassOne}
              style={isClicked ? styleClicked : styleUnclicked}
            ></span>
            <span
              className={isClicked ? lineClassTwoActive : lineClassTwo}
            ></span>
            <span
              className={isClicked ? lineClassThreeActive : lineClassThree}
              style={isClicked ? styleClicked : styleUnclicked}
            ></span>
          </div>
        </div>
        <ul className={isClicked ? navListOpen : navList}>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.navLink}
              activeStyle={headerActive}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.navLink}
              activeStyle={headerActive}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.navLink}
              activeStyle={headerActive}
              partiallyActive={true}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.navLink}
              activeStyle={headerActive}
              partiallyActive={true}
              to="/education"
            >
              Education
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.navLink}
              activeStyle={headerActive}
              partiallyActive={true}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={headerStyles.navLink}
              activeStyle={headerActive}
              partiallyActive={true}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
