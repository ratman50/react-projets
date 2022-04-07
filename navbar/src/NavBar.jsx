import { FaReact } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {VscChromeClose} from "react-icons/vsc";
import {useState} from   "react";
import "./Navbar.css"
export default function NavBar() {
    const [MenuOnclick,setMenuOnClick]=useState(false);
    const [displays,setDisplays]=useState({d1:"",d2:""});
    const style={
        color:"black",
        fontSize:"2.5rem",
        borderRadius:"2em",
    }
    function handleClickMenu() {
        // const {d1,d2}=displays;
        setMenuOnClick(true);
        setDisplays(displays=>({...displays,d1:"link_small",d2:"nav_small"}));
    }
    function handleClose()
    {

        setDisplays(displays=>({...displays,d1:"",d2:""}));
    }
    
    const {d1, d2}=displays;
  return (
    <div className="navbar">
        <div className="logo">
            <h1>React <FaReact/> </h1>
        </div>
        <div className={`link ${d1}`}>
            <div className={`nav ${d2}`}>
                <button type="button" className="nav_close"><VscChromeClose className="close" onClick={handleClose}></VscChromeClose> </button>
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Products</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
            </div>
            <button className="sign-up" type="button">Sign up</button>
        </div>
        <button className="nav__menu" type="button"><GiHamburgerMenu style={{...style}} onClick={handleClickMenu}/></button>
    </div>
  )
}
