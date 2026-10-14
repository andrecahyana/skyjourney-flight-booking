import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function SearchFlightForm() {
  const navigate = useNavigate()
  const [airports, setAirports] = useState([])
  const [from, setFrom] = useState('CGK')
  const [to, setTo] = useState('DPS')
  const [date, setDate] = useState('2026-11-27')
  const [passengers, setPassengers] = useState(1)

  useEffect(() => {
    // load airports list from static file
    fetch('/src/data/airports.json').then((r) => r.json()).then(setAirports).catch(() => setAirports([]))
  }, [])

  function handleSearch(e){
    e?.preventDefault()
    const qs = new URLSearchParams({ from, to, date, passengers: String(passengers) }).toString()
    navigate(`/search?${qs}`)
  }

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Flight search</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">Book your next trip</h2>
        </div>
      </div>

      <form className="grid gap-4 md:grid-cols-5" onSubmit={handleSearch}>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">From</label>
          <select value={from} onChange={(e)=>setFrom(e.target.value)} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none">
            {airports.map((a)=> (
              <option key={a.code} value={a.code}>{a.city} ({a.code})</option>
            ))}
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">To</label>
          <select value={to} onChange={(e)=>setTo(e.target.value)} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none">
            {airports.map((a)=> (
              <option key={a.code} value={a.code}>{a.city} ({a.code})</option>
            ))}
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Date</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Passengers</label>
          <input type="number" min={1} value={passengers} onChange={(e)=>setPassengers(Number(e.target.value))} className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        <button type="submit" className="flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-4 text-center text-sm font-bold text-white shadow hover:bg-sky-700">
          Search Flight
        </button>
      </form>
    </section>
  )
}
