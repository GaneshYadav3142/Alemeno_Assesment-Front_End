import React from 'react'
import "../Css_Styles/Coursecard.css"
export const Coursecard = ({thumbnail,name,instructor,duration,schedule}) => {


  return (
    <div className='card'>
        <div className='image'>
            <img src={thumbnail} alt="image" />
        </div>
        <div className='card-desc'>
            <h3>{name}</h3>
            <h4>Course Insructor: {instructor}</h4>
            <p>Duration: {duration}</p>
            <p>Schedule: {schedule}</p>
        </div>
    </div>
  )
}
