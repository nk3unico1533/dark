import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full py-4 flex justify-between items-center px-8 fixed top-0 bg-black/30 backdrop-blur-md z-50">
      <Link to="/" className="text-2xl font-bold gradient-text">Dark Aurora</Link>
      <nav className="flex gap-6 text-gray-300">
        <Link to="/dashboard" className="hover:text-neon-cyan">Dashboard</Link>
        <Link to="/profile" className="hover:text-neon-cyan">Perfil</Link>
      </nav>
    </header>
  )
}
