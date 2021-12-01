export default function Contact() {
  return (
    <div className="contact">
      <form id="contact-form" action="https://email-free-api.herokuapp.com/send-email" method="POST" target="#">
        <label>Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name"/>

        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email"/>

        <label>Message</label>
        <textarea name="message" id="message" placeholder="Type a Message"></textarea>

        <div className="send-message">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  )
}
