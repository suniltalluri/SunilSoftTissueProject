import {NavLink} from 'react-router-dom'
// import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    return (
      <nav className="navBar_page">
        <img
          src="https://img.squadhelp.com/story_images/visual_images/1659091283-softcloud.png?class=show"
          alt="Logo"
          className="LogoImg"
        />
        <ul className="NavList">
        <li className="Nav_link">
            <NavLink className="Link" to="/">Home</NavLink>
          </li>
          <li className="Nav_link">
          <NavLink className="Link" to="/About_Us">About Us</NavLink> 
            </li>
          <li className="Nav_link">
          <NavLink className="Link" to="/Products">Products</NavLink> 
            </li>
          <li className="Nav_link">
          <NavLink className="Link" to="/Testimonials">Testimonials</NavLink> 
            </li>
          <li className="Nav_link">
          <NavLink className="Link" to="/Contact_Us">Contact Us</NavLink> 
            </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
