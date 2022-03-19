import './index.css'

export const Modal = ({open, onClose, bgImage})=>{
    if(!open) return null
    return(
        <div className="overLay"  onClick={onClose}>
            <div>
                <img
                    src={bgImage}
                    alt='portfolio image'
                    className='modal-image'
                    aria-hidden
                    onClick={onClose}
                />
            </div>
        </div>
    )
}