import React, { useEffect, useRef, useState } from 'react';
import './index.css'
import emailjs from '@emailjs/browser';
import useWindowDimensions from '../../components/home/parametres'
import InstagramIcon from '@mui/icons-material/Instagram'
import CallIcon from '@mui/icons-material/Call';
import { TabTitle } from '../../TabTitle';


export const Contact = () => {

  TabTitle('Контакты')
  const form = useRef();

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('Введиет свою электронную почту')

  const [click, setClick] = useState(true)

  const hanlderClick = ()=>{
    
    if(name==='' || number=== '' || email === ''){
      setClick(false)
    } else{
      setClick(true)
    }
  }

  console.log('CLick:', click)
  console.log('name:', name.length)
  console.log('email:', email.length)
  console.log('number:', number.length)


  const {height} = useWindowDimensions()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_pu1szot', e.target, "user_D9kLRU2Q6Iz7KBUKsryRQ")
    .then((result) => {
            console.log(result.text);
        //             setName('')
        // setNumber('')
        // setNumber('')

        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        // setName('')
        // setNumber('')
        // setNumber('')
        // console.log(e.target)
    };


    const nameHandler = (e)=>{
      setName(e.target.value)
    }

    const numberHandler = (e)=>{
      setNumber(e.target.value)
    }

    const handlerEmail = (e) =>{
      setEmail(e.target.value)
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!re.test(String(e.target.value).toLocaleLowerCase())){
        setEmailError('Введиет свою электронную почту')
      }else{
        setEmailError('')
      }
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
                <h1 className='contact-title'>Есть вопросы?</h1>
                <p className='contact-text'>Если вы заинтересованы или заинтересованы в сессии, напишите мне: 
                <span><a href='mailto:dayanaklimuk@gmail.com' className='contact-link-email'> dayanaklimuk@gmail.com</a></span></p>
            </div>
              <form ref={form} onSubmit={sendEmail} className='contact-form'>
                  <div className='name-phone-area'>

                    <input type="text" name="name" placeholder={(name===''  && !click) ?  'Введите имя' : "Имя"}
                      className={((name=== '' )&& !click) ? 'contact-form-input-error name-phone-input' : 'contact-form-input name-phone-input'}
                      onChange={(e)=>nameHandler(e)}
                    />
                    <input type="number" name="user_phone" placeholder={(number === '' && !click) ?  'Введите номер телефона'  : "Номер телефона"}
                      className={(number === '' && !click) ? 'contact-form-input-error name-phone-input' : 'contact-form-input name-phone-input'}
                      onChange={(e)=>numberHandler(e)}
                    />
                  </div>
                <input type="email" name="user_email" placeholder={(email === '' && !click)  ?  'Введите эдектроную почту' : "Адрес электронной почты"}
                    className={(email === '' && !click) ? 'contact-form-input-error' : 'contact-form-input'}
                    onChange={(e)=>handlerEmail(e)}
                  />
                  <textarea name="message" placeholder='Введите свое сообщение' className='contact-form-input contact-form-text-area'/>
                {!click ? 
                    <button  className='btn-send-disabled' onClick={hanlderClick} disabled={!click}>Заполни поля</button>
                    :<button  className='btn-send' onClick={hanlderClick} disabled={!click}>Отправить</button>

                }
              </form>
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