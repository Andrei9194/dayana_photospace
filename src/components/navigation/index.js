import {useState} from 'react'
import {NavLink} from "react-router-dom"
import './index.css'
import instagram from "../../assets/insta.png"
import logo1 from  '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

export const Navigation =() =>{

const [changeMenu, setChangeMenu] = useState(false)

const handleChangeMenu =() =>{
    setChangeMenu(!changeMenu)
}

    return(

            <div className={changeMenu ? "nav-container open-menu": "nav-container"} >
                <div className={changeMenu ? "nav-logo display-closet": "nav-logo display-open" }>
                    <img src={logo1} alt="logo1" className="img"/>

                </div>
                <div  className={changeMenu ? "nav-button-content display-open": "nav-button-content display-closet"}>
                    <NavLink exact to='/'  className="nav-button-text" onClick={handleChangeMenu} >
                    <button className="nav-button">Главная</button>
                    </NavLink>
                    <NavLink to='/portfolio' className="nav-button-text" onClick={handleChangeMenu}>
                        <button className="nav-button">портфолио</button>
                    </NavLink>
                    <NavLink to='/faq-page' className="nav-button-text" onClick={handleChangeMenu}>
                        <button  className="nav-button">вопрос-ответ</button>
                    </NavLink>
                    <NavLink to='/about-me' className="nav-button-text" onClick={handleChangeMenu}>
                        <button  className="nav-button">обо мне</button>
                    </NavLink>
                    <NavLink to='/contacts' className="nav-button-text" onClick={handleChangeMenu}>
                        <button  className="nav-button">контакты</button>
                    </NavLink>
                </div>
                <div className={changeMenu ? "nav-socialMedia display-open": "nav-socialMedia display-closet"}>
                    <a href="https://www.instagram.com/dayana_photospace/?hl=ru">
                        <img src={instagram} alt="insta" />
                    </a>
                </div>
                <div onClick={handleChangeMenu} className={changeMenu ? "menuIcon-media display-closet": "menuIcon-media display-open"}>
                    <MenuIcon /> 
                </div>
            </div>
    )
}
