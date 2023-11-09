import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../Redux/CoursesReducer/action'
import { Button, HStack, Progress } from '@chakra-ui/react'
import "../Css_Styles/Dashboard.css"
export const Dashboard = () => {
  const [progress, setProgress] = useState({});
  const email=localStorage.getItem("email")
  const data=useSelector((store)=>store.CoursesReducer.courses)
  const dispatch=useDispatch()
  console.log(data)
  const enrolledCourse=data.filter((item)=>item.students.some((el)=>el.email===email))
   const handelComplete=(id)=>{
    setProgress((prevProgress) => {
      return { ...prevProgress, [id]: 100 };
    });
   }
   const handelPending=(id)=>{
    setProgress((prevProgress) => {
      return { ...prevProgress, [id]: 40 };
    });
   }
  useEffect(()=>{
    dispatch(getCourses())
  },[])
  return (
       <div className='dashboard-container'>
        {enrolledCourse.length>0 ? (enrolledCourse.map((item,i)=>{
          return (<div key={i} className='card'>
            <Progress value={progress[item.id] || 6}  colorScheme={progress[item.id]===100 ? 'green' : 'red'} />
          <div className='image'>
              <img src={item.thumbnail} alt="image" />
          </div>
          <div className='card-desc'>
              <h3>{item.name}</h3>
              <h4>Insructor :<strong>{item.instructor}</strong></h4>
              <p>Duration :<strong>{item.duration}</strong></p>
          </div>
          <div style={{display:"flex",justifyContent:'space-evenly',alignItems:'center',paddingBottom:"10px"}}>
          <Button colorScheme='blue' size='sm' onClick={()=>handelPending(item.id)}>Mark Ongoing</Button>
          <Button colorScheme='teal' size='sm' onClick={()=>handelComplete(item.id)}>Mark Complete</Button>
          </div>
      </div>)
        })) :
        (<div className="no-courses-message">You have not enrolled in any courses. Please enroll from the Course section.</div>)
        }
       
    </div>
    
  )
}
