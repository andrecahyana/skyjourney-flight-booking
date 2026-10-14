import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BookingSummary from '../components/booking/BookingSummary'
import PaymentMethod from '../components/booking/PaymentMethod'
import { addBookingHistory, clearCurrentBooking } from '../store/bookingSlice'
import generateBookingId from '../utils/generateBookingId'

export default function PaymentPage(){
  const current = useSelector((s)=>s.booking.current)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [method, setMethod] = useState('virtual')

  if(!current) return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">No booking in progress. Please select a flight first.</div>
  )

  function handlePay(){
    const bookingId = generateBookingId()
    const completed = { ...current, bookingId, paymentMethod: method, bookedAt: new Date().toISOString() }
    dispatch(addBookingHistory(completed))
    dispatch(clearCurrentBooking())
    navigate('/success', { state: { booking: completed } })
  }

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_360px]">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-black">Choose Payment</h2>
        <p className="mt-2 text-sm text-slate-600">Review your order and select a payment method.</p>

        <div className="mt-6">
          <PaymentMethod method={method} onChange={setMethod} />

          <div className="mt-6">
            <button onClick={handlePay} className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">Pay Now</button>
          </div>
        </div>
      </div>

      <div>
        <BookingSummary flight={current.flight} passenger={current.passenger} />
      </div>
    </div>
  )
}
