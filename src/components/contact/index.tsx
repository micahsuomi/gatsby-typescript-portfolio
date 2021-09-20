/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import { IoIosSend } from 'react-icons/io'

import contactStyles from './styles.module.scss'

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const [state, setState] = useState({})

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={contactStyles.form}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your name:
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className={contactStyles.name}
          />
        </label>
      </p>
      <p>
        <label>
          Your email:
          <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className={contactStyles.email}
          />
        </label>
      </p>
      <p>
        <label>
          Message:
          <br />
          <textarea
            name="message"
            onChange={handleChange}
            className={contactStyles.message}
          />
        </label>
      </p>
      <p>
        <button type="submit" className={contactStyles.submitBtn}>
          <span>Send</span>
          <IoIosSend className="send-icon" />
        </button>
      </p>
    </form>
  )
}

export default ContactForm
