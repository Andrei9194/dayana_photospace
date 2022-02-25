import arrowContact from '../../assets/arrow-right.png'
import { Link } from 'react-router-dom'

export const AboutMe =() =>{

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
                                        <Link to='/contacts' style={{textDecoration: 'none', color: 'black'}}>
                                            <span>Kонтакты</span>
                                        </Link>
                                    </span>
                            </p> 

                            <div className='aboutme-line'>
                                <ColoredLine color='black'/>
                                <ColoredLine color='black'/>
                            </div>

                    </div>
                    {/* <div className='aboutme-image'>
                        <img src={i} alt='me'/>
                         {avatar && avatar.map(a=>
                         <img srcSet={`${a.avatar} 480w`}
                         alt="me" 
                         sizes='(min-width: 768px) 480px, 50vw'
                         className='aboutme-avatar'
                         />
                    )}
                    </div> */}
                </div>
            </div>     

    )
}

