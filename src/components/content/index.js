import {Routes, Route} from 'react-router-dom'
import { AboutMe } from '../aboutMe'
import {Contact} from '../contact'
import { FaqS } from '../faqS'
import { Home } from '../home'
import { Portfolio } from '../portfolio'
import {PortfolioDetails} from '../../components/portfolio/portfolioDetails'
import './index.css'
import { PageNotFound } from '../pageNotFound'



export const Content = () =>{

    return(
        <div className='wrapper'>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contacts' element={<Contact />} />
                <Route path='/about-me' element={<AboutMe/>} />
                <Route path='/faq-page' element={<FaqS/>} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/portfolio/:id' element={<PortfolioDetails />} />
                <Route path='/*' element={<PageNotFound/>} />
            </Routes>
        </div>
    )
}