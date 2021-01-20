import React from 'react'
import { Link } from 'gatsby'

import './style.scss'

export default function ContactLink() {
  return (
    <div className="contact-link">
      <h2>Interested in my profile?</h2>
      <Link to="/contact">
        <button className="contact-link__btn grow">Get in touch</button>
      </Link>
    </div>
  )
}
