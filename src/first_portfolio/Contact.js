import { useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { MapChart } from './MapChart'
export default function Contact() {

  const form = useRef();
  const [success , setSuccess] = useState(null)
  const [input,setInput] = useState({name:'',email:'',message:''})
  const sendEmail = (e) => {
    e.preventDefault();
    if (input.name !== '' && input.email !=='' && input.message !== '') {
      emailjs.sendForm('service_0hilq43', 'template_rw8ly2p', form.current, 'RTrhEdoFtzgVINHFm')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
            setInput({name:'',email:'',message:''})
          }

      , (error) => {
          console.log(error.text);
          setSuccess(false)
      });
    }
    else{
      alert("Please fill all fields")
    }
  };
  return (
    <section className='f_contact'>
      <div className='leftcontact'>
        <p>Contact Us</p>
        <form className='fcontactform' ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Name'  name='name' value={input.name} onChange={(e)=>setInput(e.target.value)}/>
          <input type="text" placeholder='email'  name='email' value={input.email} onChange={(e)=>setInput(e.target.value)}/>
          <textarea placeholder='Write your message' cols="30" rows="10" name="message" value={input.message} onChange={(e)=>setInput(e.target.value)}></textarea>
          <button type='submit' value="Send">Send</button>
          {success&&'Your message has been sent. we will get back to you soon :)'}
        </form>
      </div>
      <div className='frightcontact'>
        <MapChart/>
      </div>
    </section>
  )
}

