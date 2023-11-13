import React from 'react'
import Home from './Home'

const SideList = () => {
  return (
    <aside src='/' className='sideList' title='Articles list on a side'>
      <Home gridClass='sideListGrid' sideListCard='sideListCard' />
    </aside>
  )
}

export default SideList;