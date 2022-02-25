import React, { useRef } from 'react';
import './index.css'
import emailjs from '@emailjs/browser';
import useWindowDimensions from '../../components/home/parametres'
import InstagramIcon from '@mui/icons-material/Instagram'
import CallIcon from '@mui/icons-material/Call';

export const Contact = () => {
  const form = useRef();
  const {height} = useWindowDimensions()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_pu1szot', e.target, "user_D9kLRU2Q6Iz7KBUKsryRQ")
    .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <div className='contact-container' style={{height: `${height}px`}}>
        <div className='contact-content'>
            <div className='contact-information'>
                <h1 className='contact-title'>Есть вопросы?</h1>
                <p className='contact-text'>Если вы заинтересованы или заинтересованы в сессии,<br/> напишите мне: 
                <span><a href='/' className='contact-text-link-email'> dayanaklimuk@gmail.com</a></span></p>
            </div>
            <div>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <div className='name-phone-area'>
                    <input type="text" name="name" placeholder='Имя' className='contact-form-input name-phone-input'/>
                    <input type="number" name="user_email" placeholder='Номер телефона' className='contact-form-input name-phone-input'/>
                </div>
               <input type="email" name="user_email" placeholder='Адрес электронной почты' className='contact-form-input'/>
                 <textarea name="message" style={{height: '200px'}} placeholder='Введите свое сообщение' className='contact-form-input'/>
                <button className='btn-send'>Отправить</button>
             </form>
            </div>
            <div className='contact-link-area'>
              <a href='https://www.instagram.com/dayana_photospace/?hl=ru' target="_blank" rel="noreferrer" className='links'>
                  <InstagramIcon  className='link-icon' />
              </a>
              <a href='tel:+48510022444' className='links'>
                <CallIcon className='link-icon' />
              </a>
            </div>
         </div>   
    </div>
  );
};