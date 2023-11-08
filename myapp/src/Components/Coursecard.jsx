import React from 'react'
import "../Css_Styles/Coursecard.css"
import { Link } from 'react-router-dom'
export const Coursecard = ({id,thumbnail,name,instructor,duration,schedule}) => {


  return (
    <div className='card'>
      <Link to={`/courses/${id}`}>
        <div className='image'>
            <img src={thumbnail} alt="image" />
        </div>
        <div className='card-desc'>
            <h3>{name}</h3>
            <h4>Course Insructor :<strong>{instructor}</strong></h4>
            <p>Duration :<strong>{duration}</strong></p>
            <p>Schedule :{schedule}</p>
        </div>
        </Link>
    </div>
  )
}
