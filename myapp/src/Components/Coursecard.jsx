import React from 'react'
import "../Css_Styles/Coursecard.css"
import { Link } from 'react-router-dom'
import { Badge, Button} from '@chakra-ui/react'
import { postStudent } from '../Redux/EnrollReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/store'
import { getBadgeColor } from '../Pages/CourseDetails'
export const Coursecard = ({id,thumbnail,name,instructor,enrollmentStatus,duration,schedule}) => {
    const dispatch=useDispatch()
   console.log(enrollmentStatus)
     const email=localStorage.getItem("email")
     const name1=localStorage.getItem("name")
    const student={name:name1,email:email}
    const data=useSelector((store)=>store.StudentReducer.students)
    console.log(data)
     const handelEnroll=(id,student)=>{
      console.log("clicked")
       dispatch(postStudent(id,student))
     
    }
  return (
    <div className='card'>
     
        <div className='image'>
            <img src={thumbnail} alt="image" />
        </div>
        <div className='card-desc'>
            <h3>{name}</h3>
            <Badge colorScheme={getBadgeColor(enrollmentStatus)}>Enrollment {enrollmentStatus}</Badge>
            <h4>Course Insructor :<strong>{instructor}</strong></h4>
            <p>Duration :<strong>{duration}</strong></p>
            <p>Schedule :{schedule}</p>
        </div>
       <div style={{display:"flex",justifyContent:'space-evenly',alignItems:'center'}}>
        <Button isDisabled={enrollmentStatus==="Closed"} colorScheme="green" onClick={()=>handelEnroll(id,student)}>Enroll Now</Button>
        <Link to={`/courses/${id}`}><Button colorScheme='blue'>View Details</Button> </Link>
        </div>
    </div>
  )
}
