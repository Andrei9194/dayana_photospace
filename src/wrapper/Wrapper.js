import './wrapper.css'
export const Wrapper = (props) =>{

    return (<div className='main-wrapper'> 
    {props.children}
    </div>
    )
}