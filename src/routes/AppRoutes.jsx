import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar/Navbar'

const AppRoutes = () => {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </>


    )
}

export default AppRoutes