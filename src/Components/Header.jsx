import { NavLink } from "react-router-dom";
import './ComponentStyles/Header.css';
import Logo from '../logo.png';
import { FaAngleDown, FaBars, FaFolderOpen, FaHandsHelping, FaHome, FaPhoneAlt, FaSearch, FaTasks} from "react-icons/fa";


export default function Header({ toggleSidebar }) {
   return (
    <>
  <header className="header">

    <div className="logo">
     <img src={Logo} alt="" />
     <div className="logo-name">
      <h2>MUCISA</h2>
      <h2>MASENO</h2>
      <h2>UNIVERSITY</h2>
     </div>
    </div>
    
    <div className="Phone-menu">
      <button><FaSearch/></button>
      <button  onClick={toggleSidebar} aria-label='Open Menu'><FaBars/> </button>
    </div>

    <div className="search">
       <FaSearch className="search-icon"/>
      <form>
        <input type="text" placeholder=" Search" />
      </form>
    </div>

    <nav className="nav">
      <NavLink to="/"> <FaHome className="Home-icon"/> Home</NavLink>
      <NavLink to="/projects"><FaFolderOpen className="Home-icon"/>Our Projects</NavLink>
      <NavLink to="/activities"><FaTasks className="Home-icon"/>Our Activities</NavLink>
      <NavLink to="/support"><FaHandsHelping className="Home-icon"/>Support Us</NavLink>
      <NavLink to="/contact"><FaPhoneAlt className="Home-icon"/>Contact Us</NavLink>
    </nav>

    <div className="header-cta">
      <button> Sign In </button>
      <button >Join Us<FaAngleDown className="Home-icon"/> </button>
    </div>
  </header>

  </>
);
}
