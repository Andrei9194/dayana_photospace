import './index.css'

export const Modal = ({open, onClose, bgImage})=>{
    if(!open) return null
    return(
        <div className="overLay"  onClick={onClose}>
          <div onClick={onClose}>
                <img
                    src={bgImage}
                    alt='portfolio image'
                    className='modal-image'
                    aria-hidden
                />
            </div>
        </div>
    )
}