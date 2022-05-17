import React from 'react'
import "./portfolio.css"
import sudoku from "../../assets/sudoku.png"
import expression from "../../assets/expression.jpg"

const data = [
  {
  id: 1,
  image: sudoku, 
  title: 'Sudoku game',
  github: 'https://github.com/shaydaj/Sudoku',
},
{
  id: 2,
  image: expression,
  title: 'Emotion recognition',
  github: 'https://github.com/shaydaj/EmotionalRecognition'
}]

const portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
        {
        data.map(({id, image, title, github}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className='container portfolio__container'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a>
            </div>
            </article>
          )
        })
      }
      <div/>
    </section>
  )
}

export default portfolio