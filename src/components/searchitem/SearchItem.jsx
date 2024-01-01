import './searchItem.css'

export const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/469851735.webp?k=691a83caf477b73be6b21a13da15545a6bbd15310d8c7afdb3fac51f264d8509&o="
         alt="" className="siImg" />
         <div className="siDesc">
            <h1 className="siTitle">Tower Street Aparments</h1>
            <span className='siDistance'>500m from center</span>
            <span className="siTaxeOp">Free Airport Taxi</span>
            <span className="siSubtitle">
                Studio Aparment with air conditioning
            </span>
            <span className="siFeatures">
                Entire * Studio 1 bathroom * 21m 1 full bed 
            </span>
            <span className='siCancelOp'>Free Cancelation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel later, so lock in this great price todey!
            </span>
         </div>
         <div className="siDetails">
            <div className="siRating">
                <span>EXcellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$850</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
         </div>
    </div>
  )
}
