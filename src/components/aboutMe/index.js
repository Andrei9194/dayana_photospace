import {useEffect, useState} from 'react'
import db from "../../firebase-config"
import './index.css'
import { collection, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { TabTitle } from '../../TabTitle'

export const AboutMe =() =>{

    TabTitle('About Me')

    const ColoredLine = ({ color }) => (
        <hr
          style={{
              width: '100%',
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
                        <h4 className='aboutme-title'>welcome to my website!</h4>
                            <p className='aboutme-text'>
                                My name is Dayana and I am to happy to will be your photographer
                            </p>
                            <p className='aboutme-text'>
                                In photography, I love tenderness, details, sensibility. I strive to make every photograph special and unforgettable.
                                and inspired by its participants.
                            </p>
                            <p className='aboutme-text'>
                            I live and photograph in Grodno. <br/>
                            If our views on withdrawal are shrinking, they turn to me for help.
                                    <span className="arrow arrow--right">
                                        <Link to='/contacts' className='aboutMe-contact-link'>
                                            <span>Contacts</span>
                                        </Link>
                                    </span>
                            </p> 
                            <div className='aboutme-line'>
                                <ColoredLine color='black'/>
                                <ColoredLine color='black'/>
                            </div>
                    </div>
                    <div className='aboutme-image'>
                        {avatar && avatar.map(ava =>
                            <div className='aboutme-avatar' 
                            style={{background: `url(${ava.avatar})`}}
                            > 
                            </div>                     
                        )}
                    </div>
                </div>
            </div>     
    )
}

