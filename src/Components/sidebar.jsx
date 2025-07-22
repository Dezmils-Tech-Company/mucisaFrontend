
import { NavLink } from 'react-router-dom';
import { useEffect,useRef } from 'react';
import { FaHome,  FaFolderOpen, FaTasks, FaHandsHelping, FaPhoneAlt} from 'react-icons/fa';
import './ComponentStyles/sidebar.css';


export default function Sidebar({ isOpen,closeSidebar }) {
    const ref= useRef();

    useEffect(()=>{
        const handleClickOutside = (e)=>{
            if(ref.current&&!ref.current.contains(e.target)){
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
    },[closeSidebar]);

    if (!isOpen) return null
  return (
    <div className='sidebar-overlay'>
        <div className='sidebar'ref ={ref}>
            
        <nav className='sidebar-nav' >
      <br /> 
      <NavLink to="/" onClick={closeSidebar} className={({ isActive }) => isActive ? 'active' : ''} end>
        <FaHome /> Home
      </NavLink>
      <NavLink to="/projects" onClick={closeSidebar} className={({ isActive }) => isActive ? 'active' : ''}>
        <FaFolderOpen />Our projects
      </NavLink>
      <NavLink to="/activities" onClick={closeSidebar} className={({ isActive }) => isActive ? 'active' : ''}>
        <FaTasks/>Our Activities
      </NavLink>
      <NavLink to="/support" onClick={closeSidebar} className={({ isActive }) => isActive ? 'active' : ''}>
        <FaHandsHelping />support Us
      </NavLink>
      <NavLink to="/contact" onClick={closeSidebar} className={({ isActive }) => isActive ? 'active' : ''}>
        <FaPhoneAlt />Contact Us
      </NavLink>
    </nav>
    </div>
    </div>
  );
}

