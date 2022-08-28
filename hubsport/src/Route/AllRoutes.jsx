import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Belownavbar } from '../components/Belownavbar'
import Login from '../components/Login'
import Signup from '../components/Signup'
const AllRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Belownavbar />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signup />} />

            </Routes>
        </div>
    )
}

export default AllRoutes