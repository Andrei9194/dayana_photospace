import "./index.css"
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import { collection, onSnapshot } from "firebase/firestore"
import db from "../../firebase-config"
import { TabTitle } from "../../TabTitle"


export const Home =() =>{

    TabTitle('Главная')
    const [images, setImages] = useState(null);
 
    useEffect(()=>{
        onSnapshot(collection(db, 'homeImage'), (snapshot)=>{
            setImages(snapshot.docs.map(doc => doc.data()))
        })
    }, [images])
    
    return(
    <div className="home-conatiner">
  
          <Carousel className='carousel'>
              {images && images.map(image =>
                         
                <Carousel.Item interval={3000} className='carousel'>
                    <div className="bg" style={{backgroundImage: `url(${image.homeUrl})`}}>
                    </div>
                </Carousel.Item>
                )}
        </Carousel>
    </div>
    )
}

