import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Dashboard } from '../Pages/Dashboard'
import { Homepage } from '../Pages/Homepage'
import { CourseListing } from '../Pages/CourseListing'
import { CourseDetails } from '../Pages/CourseDetails'
import { Privateroute } from './PrivateRoute'
import { Logout } from '../Pages/Logout'

export const MainRoutes = () => {
  return (
    <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <Routes>
        <Route path="/"  element={<Homepage/>}/>
     
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard"  element={<Privateroute><Dashboard/></Privateroute>}/>
        <Route path="/courses"  element={<Privateroute><CourseListing/></Privateroute>}/>
        <Route path="/courses/:id"  element={<CourseDetails/>}/>
        <Route path="/logout" element={<Privateroute><Logout/></Privateroute>}/>
    </Routes>
</div>
  )
}
