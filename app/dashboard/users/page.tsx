 'use client'
 import { useState } from 'react'
 
export default function UsersPage() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch('https://localhost:7255/api/User', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      console.log('STEP 2: status', res.status)
      const data = await res.json()

      console.log('STEP 3: response', data)
   
      if (res.ok) {
        setMessage('User berhasil ditambahkan!')
        setId('')
        setName('')
        setEmail('')
      } else {
        setMessage('Gagal menambahkan user.')
      }
    } catch (error) {
      setMessage('Terjadi kesalahan.')
    } finally {
      setLoading(false)
    }

  
}

return (
 <div>
      <h1>Tambah User</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Id</label><br />
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>


        <div style={{ marginBottom: 10 }}>
          <label>Nama</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Simpan'}
        </button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  )
}