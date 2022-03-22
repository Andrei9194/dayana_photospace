import React, { useEffect, useRef, useState } from 'react';
import './index.css'
import {send} from '@emailjs/browser'
import InstagramIcon from '@mui/icons-material/Instagram'
import CallIcon from '@mui/icons-material/Call';
import { TabTitle } from '../../TabTitle';

export const Contact = () => {

  TabTitle('Contacts')
  const form = useRef();

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [textArea, setTextArea] = useState('')
  const [click, setClick] = useState(true)

  const hanlderClick = ()=>{
    
    if(name==='' || number=== '' || email === ''){
      setClick(false)
    } else{
      setClick(true)
    }
  }

    const sendEmail=(e)=>{
      e.preventDefault()

      send('Gmail', 'template_pu1szot', {name, email, textArea, number}, "user_D9kLRU2Q6Iz7KBUKsryRQ")
      .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setName('')
          setNumber('')
          setEmail('')
          setTextArea('')
      };

    const nameHandler = (e)=>{
      setName(e.target.value)
    }

    const numberHandler = (e)=>{
      setNumber(e.target.value)
    }

    const handlerEmail = (e) =>{
      setEmail(e.target.value)
    }

    const handleTextArea = (e) =>{
      setTextArea(e.target.value)
    }
   useEffect(()=>{
      if(name.length && number.length && email.length){
         setClick(true)
      }
    }, [name, number, email])

 
  
  return (
    <div className='contact-container'>
        <div className='contact-content'>
            <div className='contact-information'>
                <h1 className='contact-title'>You have questions?</h1>
                <p className='contact-text'>If you want information or are interested in a photo session, please contact me:
                <span><a href='mailto:dayanaklimuk@gmail.com' className='contact-link-email'> dayanaklimuk@gmail.com</a></span></p>
            </div>
              <form ref={form} onSubmit={sendEmail} className='contact-form'>
                  <div className='name-phone-area'>

                    <input type="text" name="name" placeholder={((name=== '')  && !click) ?  'Please enter your name' : "Your name"}
                    value={name}
                      className={((name=== '' )&& !click) ? 'contact-form-input-error name-phone-input' : 'contact-form-input name-phone-input'}
                      onChange={(e)=>nameHandler(e)}
                    />
                    <input type="number" name="user_phone" placeholder={((number === '') && !click) ?  'Please enter your phone'  : "Your phone"}
                      className={(number === '' && !click) ? 'contact-form-input-error name-phone-input' : 'contact-form-input name-phone-input'}
                      onChange={(e)=>numberHandler(e)}
                      value={number}
                    />
                  </div>
                <input type="email" name="user_email" placeholder={((email === '') && !click)  ?  'Please enter your email' : "Your email"}
                    className={(email === '' && !click) ? 'contact-form-input-error' : 'contact-form-input'}
                    onChange={(e)=>handlerEmail(e)} 
                    value={email}
                  />
                  <textarea name="message"  value={textArea}
                  onChange={(e)=>handleTextArea(e)} placeholder='Your message' className='contact-form-input contact-form-text-area'/>
                {!click ? 
                    <button  className='btn-send-disabled' onClick={hanlderClick} disabled={!click}>Fill in the fields</button>
                    :<button  className='btn-send' onClick={hanlderClick} disabled={!click}>Send</button>

                }
              </form>
            <div className='contact-link-area'>
              <a href='https://www.instagram.com/dayana_photospace/?hl=ru' target="_blank" rel="noreferrer" className='links'>
                  <InstagramIcon  className='link-icon' />
              </a>
              <a href='tel:+48510022444' className='links'>
                <CallIcon className='link-icon phone' />
              </a>
            </div>
         </div>   
    </div>
  );
};