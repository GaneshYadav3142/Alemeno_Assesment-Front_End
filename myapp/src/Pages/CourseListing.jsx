import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../Redux/CoursesReducer/action'
import { Coursecard } from '../Components/Coursecard'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
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
        <InputGroup width="100%" maxW="400px" mb="20px">
      <InputRightElement
        pointerEvents="none"
        children={<SearchIcon color="black" />}
      />
      <Input
        type="text"
        placeholder="Search for Course eg.React native"
        onChange={(e) => setQuery(e.target.value)}
      />
    </InputGroup>
        </div>
       <div className='card-container'>
            {data.map((el)=>{
                return <Coursecard key={el.id} {...el}/>
            })}
        </div>
    </div>
  )
}
