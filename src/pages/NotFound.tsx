import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-gray-400 mb-6">Página não encontrada.</p>
      <Link to="/" className="text-neon-cyan underline">Voltar ao início</Link>
    </div>
  )
}
