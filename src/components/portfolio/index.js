import { useState } from "react"

export const Portfolio = ()=>{

    const [images, setImages] = useState(null)

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