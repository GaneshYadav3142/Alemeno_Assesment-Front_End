import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Dashboard } from '../Pages/Dashboard'
import { Homepage } from '../Pages/Homepage'
import { CourseListing } from '../Pages/CourseListing'
import { CourseDetails } from '../Pages/CourseDetails'

export const MainRoutes = () => {
  return (
    <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <Routes>
        <Route path="/"  element={<Homepage/>}/>
     
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard"  element={<Dashboard/>}/>
        <Route path="/courses"  element={<CourseListing/>}/>
        <Route path="/courses/:id"  element={<CourseDetails/>}/>
    </Routes>
</div>
  )
}
