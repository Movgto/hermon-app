import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary-subtle border-bottom">
      <div className="container-xxl d-flex">
        <img src={Logo} className="object-fit-cover" width="100" />
        <button
        className="navbar-toggler"
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#nav-menu'
        aria-controls='nav'
        aria-expanded='false'
        aria-label='Toggles navbar'
        >
          <i className="navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end ms-2 align-middle text-end" id='nav-menu'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/home' className='nav-link'><span className="h4 fw-light">Inicio</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className='nav-link'><span className="h4 fw-light">Quienes somos</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className='nav-link'><span className="h4 fw-light">Contactanos</span></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;