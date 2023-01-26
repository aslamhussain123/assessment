import React from 'react';
import sideMenuData  from '../data/sideData';
import { Link } from 'react-router-dom';
const SideMenu = () => {
  return (
    <div className='sideBarWrapper pt-2'>
      <div className='side--contents'>
        <ul className='list-unstyled'>
          {
            sideMenuData&& sideMenuData.map((item, index) =>{
              return(
                <li key={index}>
                  <Link to={item.path}><img src={item.img} alt=''/></Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
