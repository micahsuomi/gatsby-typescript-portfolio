import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  FaGithub,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

import ContactForm from '../../components/contact'
import Layout from '../../components/layout'
import Head from '../../components/head'

import './style.scss'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        title
        email
        description
        github
        linkedin
        facebook
        instagram
      }
    }
  `)
  const {
    title,
    email,
    description,
    github,
    linkedin,
    facebook,
    instagram,
  } = data.contentfulContact
  return (
    <Layout>
      <Head title="Contact" />
      <div className="contact">
        <div className="contact__container">
          <div className="contact__left">
            <ul className="contact__info">
              <li>{title}</li>
              <li>{description}</li>
              <li>{email}</li>
            </ul>
            <ul className="contact__social-wrapper">
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
          <div className="contact__right">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
