import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home/></MainLayout>} />
      {/* add more routes here: /search, /flight/:id, /passenger, /payment, /success, /login, /register, /profile */}
    </Routes>
  )
}
