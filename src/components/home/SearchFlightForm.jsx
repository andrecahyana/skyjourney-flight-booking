import airports from '../../data/airports.json'
import { Link, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'

export default function SearchFlightForm() {
  const navigate = useNavigate()
  const [from, setFrom] = useState('CGK')
  const [to, setTo] = useState('DPS')
  const [tripType, setTripType] = useState('one-way')
  const [departDate, setDepartDate] = useState('2026-11-27')
  const [returnDate, setReturnDate] = useState('2026-11-30')
  const [passengers, setPassengers] = useState(1)

  const airportOptions = useMemo(() => airports || [], [])

  function handleSearch(e) {
    e?.preventDefault()
    const params = new URLSearchParams({
      from,
      to,
      tripType,
      date: departDate,
      passengers: String(passengers),
    })

    if (tripType === 'round-trip') {
      params.set('returnDate', returnDate)
    }

    navigate(`/search?${params.toString()}`)
  }

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Flight search</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">Book your next trip</h2>
        </div>
      </div>

      <form className="grid gap-4 md:grid-cols-6" onSubmit={handleSearch}>
        <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Trip type</label>
          <div className="flex gap-2 text-sm font-medium">
            <button
              type="button"
              onClick={() => setTripType('one-way')}
              className={`flex-1 rounded-full px-3 py-2 ${tripType === 'one-way' ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
            >
              One way
            </button>
            <button
              type="button"
              onClick={() => setTripType('round-trip')}
              className={`flex-1 rounded-full px-3 py-2 ${tripType === 'round-trip' ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
            >
              Round trip
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none">
            {airportOptions.map((a) => (
              <option key={a.code} value={a.code}>{a.city} ({a.code})</option>
            ))}
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none">
            {airportOptions.map((a) => (
              <option key={a.code} value={a.code}>{a.city} ({a.code})</option>
            ))}
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Departure</label>
          <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        {tripType === 'round-trip' && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Return</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
          </div>
        )}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Passengers</label>
          <input type="number" min={1} value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        <button type="submit" className="flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-4 text-center text-sm font-bold text-white shadow hover:bg-sky-700 md:col-span-1">
          Search Flight
        </button>
      </form>
    </section>
  )
}
