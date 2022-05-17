import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><FaLinkedinIn/></a>
        <a href='https://github.com' target="_blank"><FiGithub/></a>
    </div>
  )
}

export default headerSocials