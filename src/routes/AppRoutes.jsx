import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/search" element={<MainLayout><SearchResult /></MainLayout>} />
    </Routes>
  )
}
