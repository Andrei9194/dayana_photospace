import {useState, useEffect} from 'react'
import '../index.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../../../firebase-config'


export const PortfolioDetails =() =>{

    const [images, setImages] = useState(null)
    const params = useParams()

    useEffect(()=>{
        onSnapshot(collection(db, `${params.id}`), (snapshot) =>{
            setImages( snapshot.docs.map(doc =>doc.data()))
         })
    }, [params])

    return(
        <div className="portfolio-container">
                <ImageList sx={{ width: 900, paddingTop: "60px"}} variant="masonry" cols={3} >
                {images && images.map((item) => (
                    <ImageListItem key={item.id}>
                    <img
                        src={item.url}
                        srcSet={item.url}
                        alt='portfolio image'
                        style={{pointerEvents: 'none'}}
                    />
                    </ImageListItem>
                ))}
                </ImageList>
        </div>
       
    )
}