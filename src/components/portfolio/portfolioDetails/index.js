import {useState, useEffect} from 'react'
import './index.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../../../firebase-config'
import { TabTitle } from '../../../TabTitle';


export const PortfolioDetails =() =>{


    const [images, setImages] = useState(null)
    const params = useParams()

    useEffect(()=>{
        onSnapshot(collection(db, `${params.id}`), (snapshot) =>{
            setImages( snapshot.docs.map(doc =>doc.data()))
         })
    }, [params])

    TabTitle(params.id)
    return(
        <div className='portfolioDetails-container'>
            <ImageList variant="masonry" className='portfolioDetails-imageList'>
                {images && images.map((item) => (
                    <ImageListItem key={item.id} className='portfolioDetails-imageListItem'>
                    <img
                        src={item.url}
                        alt='portfolio image'
                        className='portfolioDetails-image'
                        aria-hidden
                    />
                    </ImageListItem>
                ))}
                </ImageList>
        </div>
                
    )
}