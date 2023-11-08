import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../Redux/CoursesReducer/action'
import { Coursecard } from '../Components/Coursecard'
import "../Css_Styles/CourseListing.css"
export const CourseListing = () => {
    
    const data=useSelector((store)=>store.CoursesReducer.courses)
    const dispatch=useDispatch()
    console.log(data)
    const [query, setQuery]=useState("")

    let ref=useRef()

    const paramObj={
     params:{
       q:query && query,
       
     }
    }
   
    useEffect(()=>{
     if(ref.current){
       clearTimeout(ref.current)
     }
   
     ref.current=setTimeout(()=>{
       dispatch(getCourses(paramObj))
     },1000)
     
    },[query])
    console.log(data)
  return (
    <div className='container'>
        <div className='Searchbar'>
            <input type='text' placeholder='Search' onChange={(e)=>setQuery(e.target.value)}/>
        </div>
        <div className='card-container'>
            {data.map((el)=>{
                return <Coursecard key={el.id} {...el}/>
            })}
        </div>
    </div>
  )
}
