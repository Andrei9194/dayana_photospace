import {useState, useEffect} from "react"
import './index.css'
import { DATABASE_URL } from '../../firebase-config'
import { PortfolioRow } from "./portfolioRow"
import { TabTitle } from "../../TabTitle"
import { SkeletonPortfolio } from "../skeleton/skeletonPortfolio"

export const Portfolio =() =>{


    TabTitle('Portfolio')
    const [images, setImages] = useState(null)

    useEffect(()=>{
      fetch(`${DATABASE_URL}/portfolioImages.json`)
      .then(r => r.json())
      .then(data => {
          const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}));
          setImages(formattedData);
      })
      .catch(()=>{      
      })         
  }, [images])
  
    return(
        <div className="portfolio-container" >
            <div className="portfolio-content-image">
                {images && images.map(image=> 
                    <PortfolioRow image={image}/>            
                )
                }
                {!images && [1, 2, 3].map((n)=> <SkeletonPortfolio key={n}/>) }
            </div>
        </div>
    )
}