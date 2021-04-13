import './Header.css'
// import avatar from '../../assets/avatar.svg'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </div>
      <p>School Management System</p>
      {/* <div className='navbar__left'>
        <a href='#'>Subscribers</a>
        <a href='#'>Video Management</a>
        <a className='active_link' href='#'>
          Admin
        </a>
      </div>
       */}
      <div className='navbar__right'>
        <span className="loggedinas">Logged in as:Admin</span>
      </div>
    </nav>
  )
}

export default Navbar
