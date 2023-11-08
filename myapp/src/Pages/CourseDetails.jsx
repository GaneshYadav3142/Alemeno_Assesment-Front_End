import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Badge } from '@chakra-ui/react'
import "../Css_Styles/CourseDetails.css"
export const CourseDetails = () => {

   const {id}= useParams()
   const [expand, setExpand]=useState(false)
   const Data=useSelector((store) => store.CoursesReducer.courses)
   const singleCourseData=Data.filter((el)=>el.id===Number(id))
  
   const getBadgeColor = (enrollmentStatus) => {
    switch (enrollmentStatus) {
      case 'Open':
        return 'green';
      case 'Closed':
        return 'red';
      case 'In Progress':
        return 'orange';
      default:
        return 'gray';
    }
  };
  return (
    <>
    {Data ?(<div className='Coursedetail-container'>
        <h1>{singleCourseData[0].name}</h1>
        <h3>Instuctor: {singleCourseData[0].instructor}</h3>
        <p>{singleCourseData[0].description}</p>
        <Badge colorScheme={getBadgeColor(singleCourseData[0].enrollmentStatus)}>Enrollment {singleCourseData[0].enrollmentStatus}</Badge>
        <p>Duration : {singleCourseData[0].duration}</p>
        <p>Schedule : {singleCourseData[0].schedule}</p>
        <p>Location :  {singleCourseData[0].location}</p>
        <p>Pre-Requisites : 
         {singleCourseData[0].prerequisites.map((item,index)=>(
           <div key={index}><strong>{item}</strong></div>
          ))}</p>
        <button onClick={()=>setExpand(!expand)}>View Syllabus</button>
        {expand && <div className='syllabus'>
        <h4>Syllabus</h4>
            {singleCourseData[0].syllabus.map((item, index) => (
             <div key={index}>
              <p>Week:{item.week}</p>
              <p>{item.content}</p>
              <p>Topic:{item.topic}</p>
              </div>
            ))}
          
          </div>}
    </div>) : <h1>No Course Selected</h1>}
    </>
  )
}
