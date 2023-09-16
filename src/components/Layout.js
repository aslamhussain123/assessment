import React from 'react';
import SideMenu from './SideMenu';
import Loadpages from './Loadpages';

const Layout = () => {
  return (
    <div className='main-layout' id='layoutWrapper'>
      {/* sidemenu */}
      <SideMenu/>

      {/* pages-main-body */}
      <Loadpages/>
    </div>
  )
}


export default Layout
