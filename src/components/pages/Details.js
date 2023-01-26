import React from 'react'
import noDataimg from '../../assets/images/no-data-found.png'
const Details = () => {
  return (
    <div className='h-100'>
      <div className='h-100 d-flex justify-content-center align-items-center'>
        <img src={noDataimg} alt='' className='noDataimg'/>
      </div>
    </div>
  )
}

export default Details
