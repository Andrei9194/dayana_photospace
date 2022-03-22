import "./index.css"
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import { collection, onSnapshot } from "firebase/firestore"
import db from "../../firebase-config"
import useWindowDimensions from "./parametres"
import { TabTitle } from "../../TabTitle"


export const Home =() =>{

    TabTitle('Home')
    const [images, setImages] = useState(null);
    const {height} = useWindowDimensions()
 
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
                    <div className="bg" style={{backgroundImage: `url(${image.homeUrl})`, height: `${height}px`}}>
                    </div>
                </Carousel.Item>

                )}
        </Carousel>
    </div>
    )
}

