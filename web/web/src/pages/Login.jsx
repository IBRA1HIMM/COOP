// src/pages/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebaseConfig'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      const token = await userCred.user.getIdToken()


      //send token to backend for verification
      const res = await fetch('http://localhost:5000/api/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if(res.ok){
        //saving token to use in dashboard page
      sessionStorage.setItem('token', token)
      navigate('/dashboard')
      }
      
    } catch (err) {
      console.error(err)
      setError('Invalid credentials')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-lg rounded w-96 space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Log In
        </button>
      </form>
    </div>
  )
}
