import React from "react"
import {Link} from "gatsby"
import { RiHeart3Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Developed with  <span className="icon -love"><RiHeart3Line/></span> by <Link to="https://tikanga.in">Tikanga.in</Link></p>
    </div>
  </footer>
)

export default Footer