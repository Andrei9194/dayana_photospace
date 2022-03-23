import './index.css'

export const SkeletonElement = ({type})=>{

    const classes = `skeleton ${type}`
    return (

        <div className={classes}>

        </div>
    )
}