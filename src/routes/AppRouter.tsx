import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
