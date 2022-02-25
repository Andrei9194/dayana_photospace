import {Routes, Route} from 'react-router-dom'
import { AboutMe } from '../aboutMe'
import {Contact} from '../contact'
import { Home } from '../home'
import './index.css'



export const Content = () =>{

    return(
        <div className='wrapper'>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contacts' element={<Contact />} />
                <Route path='/about-me' element={<AboutMe/>} />
            </Routes>
        </div>
    )
}