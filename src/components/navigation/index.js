import {Link} from 'react-router-dom'
import './index.css'
import instagram from '../../assets/insta.png'
import logo from '../../assets/logo.png'

export const Navigation =()=>{

 
    return(
            <div  className='nav-container' >
                 <div className="nav-logo">
                    <img src={logo} alt="logo1" className="img"/>
                </div>
                <div className="nav-button-content">
                    <Link to='/' className="nav-button-text">
                    <button className='nav-button'> 
                        Главная
                    </button>
                    </Link>
                    <Link to='/portfolio' className="nav-button-text">
                        <button className="nav-button">портфолио</button>
                    </Link>
                    <Link to='/blog' className="nav-button-text">
                        <button  className="nav-button">блог</button>
                    </Link>
                    <Link to='/about-me' className="nav-button-text">
                        <button  className="nav-button">обо мне</button>
                    </Link>
                    <Link to='/contacts' className="nav-button-text">
                        <button  className="nav-button">контакты</button>
                    </Link>
                </div>
                <div className="nav-socialMedia">
                    <a href="https://www.instagram.com/dayana_photospace/?hl=ru" target="_blank">
                        <img src={instagram} alt="insta"/>
                    </a>
                </div>
            </div>
    )
}