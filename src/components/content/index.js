import {Routes, Route} from 'react-router-dom'
import { AboutMe } from '../aboutMe'
import {Contact} from '../contact'
import { FaqS } from '../faqS'
import { Home } from '../home'
import { Portfolio } from '../portfolio'
import './index.css'



export const Content = () =>{

    return(
        <div className='wrapper'>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contacts' element={<Contact />} />
                <Route path='/about-me' element={<AboutMe/>} />
                <Route path='/faq-page' element={<FaqS/>} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </div>
    )
}