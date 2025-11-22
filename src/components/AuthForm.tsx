import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function AuthForm() {
  const { signIn, signUp } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      if (isLogin) await signIn(email, password)
      else await signUp(email, password, displayName)
      alert('Autenticação realizada com sucesso!')
    } catch (err: any) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass-panel rgb-border-animated p-6 max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-semibold gradient-text mb-4 text-center">
        {isLogin ? 'Entrar' : 'Criar Conta'}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {!isLogin && (
          <input
            className="p-2 rounded bg-transparent border border-gray-600 focus:outline-none"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        )}
        <input
          className="p-2 rounded bg-transparent border border-gray-600 focus:outline-none"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 rounded bg-transparent border border-gray-600 focus:outline-none"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loading}
          className="bg-gradient-to-r from-neon-purple to-neon-cyan py-2 rounded font-semibold hover:opacity-80"
          type="submit"
        >
          {loading ? 'Aguarde...' : isLogin ? 'Entrar' : 'Cadastrar'}
        </button>
      </form>
      <p className="text-sm text-gray-400 mt-4 text-center cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Entrar'}
      </p>
    </div>
  )
}
