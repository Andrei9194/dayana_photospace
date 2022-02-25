import {Link} from 'react-router-dom'
import '../index.css'

export const PortfolioRow = ({image}) =>{
    return (
        <Link to={`/portfolio/${image.title}`}>
            <div key={image.id} data-id={image.id} className="portfolio-element" data-title={image.title}>
                          <img src={image[Object.keys(image)[2]]}
                              alt={image.title} className='portfolio-img'
                              />
            </div>
        </Link>                
    )
}
