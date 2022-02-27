import {useEffect, useState} from 'react'
import db from "../../firebase-config"
import './index.css'
import { collection, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { TabTitle } from '../../TabTitle'

export const AboutMe =() =>{

    TabTitle('Обо мне')

    const ColoredLine = ({ color }) => (
        <hr
          style={{
            color,
            backgroundColor: color,
            height: 2,
            margin: '16px 0 0 0'
          }}
        />
      );

      const [avatar, setAvatar] = useState()

      useEffect(()=>{
          onSnapshot(collection(db, 'avatar'), (snapshot)=>{
              setAvatar(snapshot.docs.map(doc=>doc.data()))
          })
      }, [])

    return(
            <div className='aboutme-container' >     
                <div className='aboutme-content'> 
                    <div className='aboutme-information'>
                        <h4 className='aboutme-title'>Добро пожаловать на мой сайт!</h4>
                            <p className='aboutme-text'>
                                Меня зовут Даяна и я с удовольствием<br/> стану Вашим фотографом.
                            </p>
                            <p className='aboutme-text'>
                                В фотографии я люблю нежность,<br/> детали, чувственность. Стремлюсь сделать каждую съёмку особенной, незабываемой<br /> и вдохновляюсь ее участниками.
                            </p>
                            <p className='aboutme-text'>
                                Живу и снимаю в Гродно. <br/>
                                Если наши с вами взгляды на съемку совпадают, свяжитесь со мной любым удобным для вас способом. 
                                    <span className="arrow arrow--right">
                                        <Link to='/contacts' className='aboutMe-contact-link'>
                                            <span>Kонтакты</span>
                                        </Link>
                                    </span>
                            </p> 
                            <div className='aboutme-line'>
                                <ColoredLine color='black'/>
                                <ColoredLine color='black'/>
                            </div>
                    </div>
                    <div className='aboutme-image'>
                         {avatar && avatar.map(a=>
                         <img src={`${a.avatar}`}
                         alt="me" 
                         className='aboutme-avatar'
                         />
                    )}
                    </div>
                </div>
            </div>     

    )
}

