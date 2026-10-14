import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'
import PassengerPage from '../pages/PassengerPage'
import PaymentPage from '../pages/PaymentPage'
import SuccessPage from '../pages/SuccessPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from '../components/auth/PrivateRoute'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/search" element={<MainLayout><SearchResult /></MainLayout>} />

      <Route path="/passenger" element={<PrivateRoute><MainLayout><PassengerPage /></MainLayout></PrivateRoute>} />
      <Route path="/payment" element={<PrivateRoute><MainLayout><PaymentPage /></MainLayout></PrivateRoute>} />
      <Route path="/success" element={<PrivateRoute><MainLayout><SuccessPage /></MainLayout></PrivateRoute>} />

      <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
      <Route path="/register" element={<MainLayout><RegisterPage /></MainLayout>} />
    </Routes>
  )
}
