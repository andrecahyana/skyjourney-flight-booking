import React from 'react'
import PassengerForm from '../components/booking/PassengerForm'
import BookingSummary from '../components/booking/BookingSummary'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentBooking } from '../store/bookingSlice'

export default function PassengerPage(){
  const { state } = useLocation()
  const flight = state?.flight
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if(!flight) return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">No flight selected. Please go back to search.</div>
  )

  function handleSavePassenger(passenger){
    const booking = { flight, passenger }
    dispatch(setCurrentBooking(booking))
    navigate('/payment')
  }

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_360px]">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-black">Passenger Information</h2>
        <p className="mt-2 text-sm text-slate-600">Enter passenger details for the booking.</p>

        <div className="mt-6">
          <PassengerForm onSave={handleSavePassenger} />
        </div>
      </div>

      <div>
        <BookingSummary flight={flight} />
      </div>
    </div>
  )
}
