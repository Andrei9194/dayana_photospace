import { useEffect, useState } from "react"
import {DATABASE_URL} from '../../firebase-config'

export const Portfolio = ()=>{

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
    }, [])

    return(
        <div className="portfolio-container" >
        <div className="portfolio-content-image">
                {images && images.map(image=> 
                   <div className="portfolio-container" >
                   <div className="portfolio-content-image">
                           {images && images.map(image=> 
                              <div key={image.id} data-id={image.id} className="portfolio-element" data-title={image.title}>
                              <img src={image[Object.keys(image)[2]]}
                                  alt={image.title} className='portfolio-img'
                                  />
                               </div>            
                           )}
                   </div>
               </div>          
                )}
        </div>
    </div>
    )
}