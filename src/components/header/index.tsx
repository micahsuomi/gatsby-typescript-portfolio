import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import { HeaderProps } from '../../types'
import logo from '../../images/icon-logo.png'

import headerStyles from './styles.module.scss'
import './styles.css'

const headerActive = {
  borderBottom: '3px solid rgb(175 175 246)',
}

const borderToggleBarClicked = {
  border: '1px solid black',
  borderRadius: '500px',
}

const borderToggleBarUnclicked = {
  border: 'none',
}

const styleDark = {
  background: 'black',
}

const styleLight = {
  background: 'white',
}

const Header = ({ siteTitle }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [isClicked, setState] = useState(false)

  const navLink = 'nav-link'
  const navLinkScrolled = 'nav-link active'

  const lineClassOne = 'line top'
  const lineClassOneActive = 'line top active'

  const lineClassTwo = 'line middle'
  const lineClassTwoActive = 'line middle active'

  const lineClassThree = 'line bottom'
  const lineClassThreeActive = 'line bottom active'

  const changeBackground = () => {
    if (window.scrollY >= 50 || window.innerWidth <= 800) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  const toggle = () => {
    setState(!isClicked)
  }
  useEffect(() => {
    changeBackground()
  }, [])
  window.addEventListener('scroll', changeBackground)

  return (
    <header className={scrolled ? 'header active' : 'header'}>
      <div className={headerStyles.title}>
        <Link to="/" className={headerStyles.titleLink}>
          <img src={logo} alt="title" />
          <span>{siteTitle.toUpperCase()}</span>
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
              style={scrolled ? styleDark : styleLight}
            ></span>
            <span
              className={isClicked ? lineClassTwoActive : lineClassTwo}
              style={scrolled ? styleDark : styleLight}
            ></span>
            <span
              className={isClicked ? lineClassThreeActive : lineClassThree}
              style={scrolled ? styleDark : styleLight}
            ></span>
          </div>
        </div>
        <ul className={isClicked ? 'nav-list open' : 'nav-list'}>
          <li className={headerStyles.navItem}>
            <Link
              className={scrolled ? navLinkScrolled : navLink}
              activeStyle={headerActive}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={scrolled ? navLinkScrolled : navLink}
              activeStyle={headerActive}
              partiallyActive={true}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={scrolled ? navLinkScrolled : navLink}
              activeStyle={headerActive}
              partiallyActive={true}
              to="/education"
            >
              Education
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={scrolled ? navLinkScrolled : navLink}
              activeStyle={headerActive}
              partiallyActive={true}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              className={scrolled ? navLinkScrolled : navLink}
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
