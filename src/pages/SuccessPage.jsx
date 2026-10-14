import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SuccessPage(){
  const { state } = useLocation()
  const booking = state?.booking
  const navigate = useNavigate()

  if(!booking) return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">No booking information. Return to home.</div>
  )

  function handleDownload(){
    // placeholder for e-ticket download
    alert('E-ticket download placeholder for ' + booking.bookingId)
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
      <div className="mb-4 text-5xl">✅</div>
      <h2 className="text-2xl font-black">Booking Success</h2>
      <p className="mt-2 text-sm text-slate-600">Booking ID:</p>
      <div className="mt-2 text-lg font-mono font-bold">{booking.bookingId}</div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={handleDownload} className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700">Download E-Ticket</button>
        <button onClick={()=>navigate('/')} className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold">Back to Home</button>
      </div>
    </div>
  )
}
