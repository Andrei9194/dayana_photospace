import { NavLink } from "react-router-dom"
import { TabTitle } from "../../TabTitle"
import './index.css'
// import errorImage from '../../assets/404.jpg'

export const PageNotFound =() =>{

TabTitle('404-Page not found | dayanaphotospace.netlify.app')
    
    return(
        <div className="pageNotFound-container">
            <div className='pageNotFound-content'>
                <div className="pageNotFound-information">
                <h2 className="pageNotFound-title">Sorry!</h2>
                <h2 className="pageNotFound-title">The requested page was not found!</h2>
                <p className="pageNotFound-text">Please check that the Web site address is spelled correctly.
                    Or go to our <NavLink exact to='/' className="pageNotFound-link">
                        home page
                        </NavLink>
                    , and use the menus to navigate to a specific section.
                </p>
                </div>
                <div className="pageNotFound-bg">

                </div>
            </div>
            
        </div>
    )
}