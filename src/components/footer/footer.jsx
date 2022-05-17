import React from 'react'
import "./footer.css"
import {CgInstagram} from 'react-icons/cg'
import {GrLinkedinOption} from 'react-icons/gr'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Shayda</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com'><CgInstagram/></a>
        <a href='https://linkedin.com'><GrLinkedinOption/></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; Shayda. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default footer