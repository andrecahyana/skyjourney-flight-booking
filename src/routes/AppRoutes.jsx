import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'
import PassengerPage from '../pages/PassengerPage'
import PaymentPage from '../pages/PaymentPage'
import SuccessPage from '../pages/SuccessPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/search" element={<MainLayout><SearchResult /></MainLayout>} />
      <Route path="/passenger" element={<MainLayout><PassengerPage /></MainLayout>} />
      <Route path="/payment" element={<MainLayout><PaymentPage /></MainLayout>} />
      <Route path="/success" element={<MainLayout><SuccessPage /></MainLayout>} />
    </Routes>
  )
}
