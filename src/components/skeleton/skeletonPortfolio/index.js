import { SkeletonElement } from "../index"


export const SkeletonPortfolio = ()=>{
    return(
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <SkeletonElement 
                type='img' 
                />
            </div>
        </div>
    )
}