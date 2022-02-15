import {Routes, Route} from 'react-router-dom'
import { Home } from '../home'
import './index.css'



export const Content = () =>{

    return(
        <div className='wrapper'>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </div>
    )
}