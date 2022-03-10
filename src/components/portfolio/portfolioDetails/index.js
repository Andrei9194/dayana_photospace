import {useState, useEffect} from 'react'
import './index.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../../../firebase-config'
import { TabTitle } from '../../../TabTitle';
import {Modal} from './modal'

export const PortfolioDetails =() =>{


    const [images, setImages] = useState(null)

    const [isOpen, setIsOpen] = useState(false)
    const [modalImage, setModalImage] = useState(null)
    const params = useParams()

    const handleModalImage = (imageUrl)=>{
        setModalImage(imageUrl)
    }


    const handleClose = ()=>{
        setIsOpen(false)
        handleModalImage(null)
    }
 
    const handleOpen=()=>{
        setIsOpen(!isOpen)
    }

    console.log(modalImage)

    const handleModalChange =(imageUrl)=>{
        handleModalImage(imageUrl)
        handleOpen()
    }
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
                    <ImageListItem key={item.id}
                    onClick={()=>handleModalChange(item.url)}

                    className='portfolioDetails-imageListItem'>
                    <img
                        src={item.url}
                        alt='portfolio image'
                        className='portfolioDetails-image'
                        aria-hidden
                    />
                    </ImageListItem>
                ))}
                </ImageList>
                <Modal 
                 open={isOpen} onClose={handleClose} bgImage={modalImage}
                 />
        </div>
                
    )
}