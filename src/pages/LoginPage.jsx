import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'

export default function LoginPage(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((s)=>s.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const res = await dispatch(loginUser({ email, password }))
    if(res.type === 'auth/login/fulfilled'){
      navigate('/')
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-2xl font-black">Log in</h2>
      <p className="mt-2 text-sm text-slate-600">Sign in to manage your bookings.</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
        </div>

        {auth.error && <div className="text-sm text-red-600">{auth.error}</div>}

        <div className="pt-4">
          <button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">Log in</button>
        </div>
      </form>

      <div className="mt-4 text-center text-sm text-slate-600">
        Don't have an account? <Link to="/register" className="text-sky-600">Register</Link>
      </div>
    </div>
  )
}
