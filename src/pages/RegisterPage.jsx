import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'

export default function RegisterPage(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((s)=>s.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const res = await dispatch(registerUser({ email, password, fullName }))
    if(res.type === 'auth/register/fulfilled'){
      navigate('/')
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-2xl font-black">Create account</h2>
      <p className="mt-2 text-sm text-slate-600">Register to save bookings and view history.</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700">Full name</label>
          <input required value={fullName} onChange={(e)=>setFullName(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
        </div>
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
          <button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">Create account</button>
        </div>
      </form>

      <div className="mt-4 text-center text-sm text-slate-600">
        Already have an account? <Link to="/login" className="text-sky-600">Log in</Link>
      </div>
    </div>
  )
}
