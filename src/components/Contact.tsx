import {useState} from 'react'
import axios from 'axios';

import "react-toastify/dist/ReactToastify.css"
import {toast, ToastContainer} from "react-toastify"

export default function Contact() {
  const successToastEmitter = () => {
    toast.success('🐈‍⬛ Email Sent!',
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    )
  }

  const errorToastEmitter = () => {
    toast.error('🐈‍⬛ Error!',
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    )
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [disableButtonState, setDisableButtonState] = useState(false)

  async function onSubmit(event: any) {
    event.preventDefault()

    const formToBeSubmitted = {
      name: name,
      email: email,
      message: message
    }

    setDisableButtonState(true)

    try {
      await axios.post("https://email-free-api.herokuapp.com/send-email", formToBeSubmitted)
      successToastEmitter()
    } catch (error) {
      if(error) errorToastEmitter()
    }
    
    setDisableButtonState(false)
  }

  return (
    <div className="contact">
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Your Name" required/>

        <label>Email</label>
        <input type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Your Email" required/>

        <label>Message</label>
        <textarea name="message" id="message" value={message} onChange={event => setMessage(event.target.value)} placeholder="Type a Message" required/>

        <div className="send-message">
          <ToastContainer theme="dark"/>
          <button type="submit" disabled={disableButtonState}>Send Message</button>
        </div>
      </form>
    </div>
  )
}
