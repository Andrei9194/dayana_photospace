import {useState} from 'react'
import {NavLink} from "react-router-dom"
import './index.css'
import instagram from "../../assets/insta.png"
import logo1 from  '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navigation =() =>{

const [changeMenu, setChangeMenu] = useState(false)

const handleChangeMenu =() =>{
    setChangeMenu(!changeMenu)
}

    return(

            <div className= "nav-container" >
                <NavLink exact to='/' className='nav-logo-link'>
                    <div className="nav-logo">
                        <img src={logo1} alt="logo1" className="img"/>
                    </div>
                </NavLink>

                <div className={changeMenu ? "toogle-content display-open": "toogle-content display-closet"}>
                    <div  className="nav-button-content">
                        <NavLink exact to='/'  className="nav-button-text" onClick={handleChangeMenu} >
                            <button className="nav-button">home</button>
                        </NavLink>
                        <NavLink to='/portfolio' className="nav-button-text" onClick={handleChangeMenu}>
                            <button className="nav-button">portfolio</button>
                        </NavLink>
                        <NavLink to='/faq-page' className="nav-button-text" onClick={handleChangeMenu}>
                            <button  className="nav-button">faq's</button>
                        </NavLink>
                        <NavLink to='/about-me' className="nav-button-text" onClick={handleChangeMenu}>
                            <button  className="nav-button">about me</button>
                        </NavLink>
                        <NavLink to='/contacts' className="nav-button-text" onClick={handleChangeMenu}>
                            <button  className="nav-button">contact</button>
                        </NavLink>
                    </div>
                    <div className="nav-socialMedia">
                        <a href="https://www.instagram.com/dayana_photospace/?hl=ru">
                            <img src={instagram} alt="insta" />
                        </a>
                    </div>
                </div>
                <div onClick={handleChangeMenu} className="menuIcon-media">
                   {changeMenu ? <CloseIcon /> : <MenuIcon /> }
                </div>
            </div>
    )
}