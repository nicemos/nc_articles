import Home from './Home'

const SideList = () => {
  return (
    <aside src='/' className='sideList' title='Articles list on a side'>
      <Home {...{sideListCard:'sideListCard', gridClass:'sideListGrid'}} />
    </aside>
  )
}

export default SideList;