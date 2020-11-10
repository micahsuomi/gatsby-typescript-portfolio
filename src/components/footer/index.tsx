import React from 'react'
import {
  FaGithub,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

import { FooterProps } from '../../types'

import './style.scss'

const Footer = ({
  copyright,
  github,
  linkedin,
  facebook,
  instagram,
}: FooterProps) => {
  return (
    <div className="footer">
      <div className="footer__grid">
        <div>
          <h4 className="footer__name">{copyright}</h4>
        </div>
        <div className="footer__date-tech">
          {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <div>
          <ul className="footer__social">
            <li>
              <a href={github} target="blank">
                <FaGithub className="footer__icon grow" />
              </a>
            </li>
            <li>
              <a href={linkedin} target="blank">
                <FaLinkedin className="footer__icon grow" />
              </a>
            </li>
            <li>
              <a href={facebook} target="blank">
                <FaFacebookSquare className="footer__icon grow" />
              </a>
            </li>
            <li>
              <a href={instagram} target="blank">
                <FaInstagram className="footer__icon grow" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
