import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useCredits } from '../hooks/useCredits'
import { supabase } from '../lib/supabaseClient'

export default function Dashboard() {
  const { user } = useAuth()
  const { credits } = useCredits(user?.id)
  const [result, setResult] = useState<any>(null)
  const [query, setQuery] = useState('')

  const handleConsulta = async () => {
    if (!user) return alert('Faça login.')
    if (!credits || credits <= 0) return alert('Sem créditos disponíveis.')
    // Exemplo de consulta fictícia
    setResult({ nome: 'João da Silva', cpf: '123.456.789-00' })
    await supabase.from('consultation_history').insert({
      user_id: user.id,
      module: 'CPF',
      route: 'cpf-full',
      query,
      result: { nome: 'João da Silva' }
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pt-24">
      <h1 className="text-4xl font-bold gradient-text mb-6">Painel de Consultas</h1>
      <p className="text-gray-400 mb-4">Créditos disponíveis: {credits ?? '...'} </p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite CPF, CNPJ, etc..."
        className="p-2 bg-transparent border border-gray-600 rounded w-80 mb-4 text-center"
      />
      <button
        onClick={handleConsulta}
        className="px-5 py-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg font-semibold hover:opacity-80"
      >
        Consultar
      </button>
      {result && (
        <div className="mt-8 glass-panel p-6 w-96 text-left">
          <h3 className="font-semibold mb-2 text-neon-cyan">Resultado:</h3>
          <pre className="text-gray-300 text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
