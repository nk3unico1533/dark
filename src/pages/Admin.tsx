import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../hooks/useAuth'

export default function Admin() {
  const { user } = useAuth()
  const [users, setUsers] = useState<any[]>([])
  const [role, setRole] = useState<string>('')

  useEffect(() => {
    const loadUsers = async () => {
      const { data, error } = await supabase.from('profiles').select('*, user_roles(role)')
      if (!error) setUsers(data || [])
    }
    loadUsers()
  }, [])

  const updateRole = async (userId: string, newRole: string) => {
    await supabase.from('user_roles').update({ role: newRole }).eq('user_id', userId)
    alert(`Role alterada para ${newRole}`)
  }

  return (
    <div className="min-h-screen pt-24 px-8">
      <h1 className="text-3xl font-bold gradient-text mb-6">Painel Administrativo</h1>
      <div className="overflow-x-auto glass-panel p-4">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-gray-700 text-neon-cyan">
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b border-gray-800 hover:bg-white/5">
                <td>{u.display_name}</td>
                <td>@{u.username}</td>
                <td>{u.user_roles?.role ?? 'user'}</td>
                <td>
                  <select
                    className="bg-transparent border border-gray-600 rounded text-sm p-1"
                    value={u.user_roles?.role ?? 'user'}
                    onChange={(e) => updateRole(u.user_id, e.target.value)}
                  >
                    <option value="user">user</option>
                    <option value="premium">premium</option>
                    <option value="admin">admin</option>
                    <option value="owner">owner</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
