import React from 'react'
import "./about.css"
import me from "../../assets/me.png";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'

const about = () => {
  return (
    <section id = 'about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'> 
      <div className='about__me'>
        <div className='about__me-image'>
          <img src='../assets/me.png'></img>
        </div>
      </div>
      <div className="about__content">
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>experience</h5>
            <small>3+ years</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>clients</h5>
            <small>200+ clients worldwide</small>
          </article>

          <article className='about__card'>
            <BsFolder2Open className='about__icon'/>
            <h5>projects</h5>
            <small>80+ completed projects</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet eum exercitationem iste magni! Eius quidem nihil saepe qui, nam praesentium eligendi voluptas sapiente. Corrupti similique sunt doloremque ullam earum!
        </p>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
      </div>
      </div>
    </section>
  )
}

export default about