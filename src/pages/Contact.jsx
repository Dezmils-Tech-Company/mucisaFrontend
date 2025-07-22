  import React from 'react';
   import './pageStyles/contact.css';
import { useRef } from 'react';
     const Contact = () => {
       const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  };

  return (
    <div className="container">
        <div className='contact-header'>
            <h1>Get Instant Assistance From Our Team</h1>
            <p>We are glad to here from You!!</p>
        </div>
    <form ref={form} onSubmit={sendEmail} className="form">
      <input className="input" type="text" name="name" placeholder="Your Name" required />
 <input  className="input" type="email" name="email" placeholder="Your Email" required />
      <textarea className="input"  name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
    </div>
  );
}

     export default Contact;