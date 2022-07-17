import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-primary'>
      <Link className='nav-link nav-item text-white' to={'/'}>Home</Link>
      <Link className='nav-link nav-item text-white' to={'/pagina1'}>Pagina 1</Link>
      <Link className='nav-link nav-item text-white' to={'/pagina2'}>Pagina 2</Link>
    </nav>
  );
};

export default NavBar;