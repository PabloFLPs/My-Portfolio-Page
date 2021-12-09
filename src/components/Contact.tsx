import {useState} from 'react'
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(event: any) {
    event.preventDefault()

    const formToBeSubmitted = {
      name: name,
      email: email,
      message: message
    }

    axios.post("https://email-free-api.herokuapp.com/send-email", formToBeSubmitted)

    //Cleaning input fields
    setName(''); setEmail(''); setMessage('')
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
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  )
}
