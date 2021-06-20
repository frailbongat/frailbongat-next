import Menu from './Menu'

const Sidebar = () => {
  return (
    <nav className='drawer-side'>
      <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
      <Menu />
    </nav>
  )
}

export default Sidebar
