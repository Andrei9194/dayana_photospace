import "./index.css"
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import { collection, onSnapshot } from "firebase/firestore"
import db from "../../firebase-config"
import useWindowDimensions from "./parametres"


export const Home =() =>{

    const [images, setImages] = useState(null);
    const {height, width} = useWindowDimensions()
 
    useEffect(()=>{
        onSnapshot(collection(db, 'homeImage'), (snapshot)=>{
            setImages(snapshot.docs.map(doc => doc.data()))
        })
    }, [images])
    
    return(
    <div className="home-conatiner">
  
          <Carousel>
              {images && images.map(image =>
                         
                <Carousel.Item interval={3000}>
                    <img
                className="d-block" 
                src={image.homeUrl}
                alt="First slide"
                style={{width: '100%', height: `${height}px`, display: 'block', pointerEvents: 'none'}}
                />      
                </Carousel.Item>

                )}
        </Carousel>
    </div>
    )
}

