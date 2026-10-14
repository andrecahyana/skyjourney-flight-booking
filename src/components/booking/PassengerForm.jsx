import React, { useState } from 'react'

export default function PassengerForm({ onSave, initial = {} }){
  const [fullName, setFullName] = useState(initial.fullName || '')
  const [passport, setPassport] = useState(initial.passport || '')
  const [nationality, setNationality] = useState(initial.nationality || 'Indonesia')
  const [phone, setPhone] = useState(initial.phone || '')
  const [email, setEmail] = useState(initial.email || '')

  function handleSubmit(e){
    e.preventDefault()
    onSave({ fullName, passport, nationality, phone, email })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Full Name</label>
        <input required value={fullName} onChange={(e)=>setFullName(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Passport Number</label>
        <input required value={passport} onChange={(e)=>setPassport(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Nationality</label>
        <input value={nationality} onChange={(e)=>setNationality(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Phone Number</label>
        <input required value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" />
      </div>

      <div className="pt-4">
        <button type="submit" className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">Continue</button>
      </div>
    </form>
  )
}
