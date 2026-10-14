import { useLocation } from 'react-router-dom'
import flightsData from '../data/dummyFlights.json'
import { useMemo, useState } from 'react'

export default function SearchResult() {
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])

  const from = params.get('from')
  const to = params.get('to')
  const tripType = params.get('tripType') || 'one-way'
  const maxPrice = params.get('maxPrice') ? Number(params.get('maxPrice')) : 2500000
  const sortBy = params.get('sortBy') || 'cheapest'
  const directOnly = params.get('directOnly') === 'true'

  const [selectedAirlines, setSelectedAirlines] = useState(() => new Set())
  const [selectedStops, setSelectedStops] = useState('all')

  const airlines = Array.from(new Set(flightsData.map((f) => f.airline)))

  const filtered = useMemo(() => {
    const list = flightsData.filter((f) => {
      if (from && f.from !== from) return false
      if (to && f.to !== to) return false
      if (f.price > maxPrice) return false
      if (selectedAirlines.size > 0 && !selectedAirlines.has(f.airline)) return false
      if (directOnly && f.stops !== 0) return false
      if (selectedStops !== 'all' && f.stops > Number(selectedStops)) return false
      return true
    })

    const sorted = [...list]
    if (sortBy === 'cheapest') {
      sorted.sort((a, b) => a.price - b.price)
    }
    if (sortBy === 'fastest') {
      sorted.sort((a, b) => Number(a.duration.replace(/[^\d]/g, '')) - Number(b.duration.replace(/[^\d]/g, '')))
    }
    if (sortBy === 'best') {
      sorted.sort((a, b) => (a.badge === 'Best value' ? -1 : 0) - (b.badge === 'Best value' ? -1 : 0))
    }

    return sorted
  }, [from, to, maxPrice, selectedAirlines, directOnly, selectedStops, sortBy])

  function toggleAirline(a) {
    const next = new Set(selectedAirlines)
    if (next.has(a)) next.delete(a)
    else next.add(a)
    setSelectedAirlines(next)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Flight result</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">{from && to ? `${from} → ${to}` : 'All flights'}</h1>
          </div>
          <div className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            {tripType === 'round-trip' ? 'Round trip' : 'One way'} • {params.get('date') || 'Any date'} • {params.get('passengers') || '1 Adult'}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-900">Advanced filter</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Sort by</label>
              <select defaultValue={sortBy} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
                <option value="cheapest">Cheapest</option>
                <option value="fastest">Fastest</option>
                <option value="best">Best value</option>
              </select>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Price</h3>
              <input type="range" min="300000" max="2500000" step="100000" defaultValue={maxPrice} className="w-full accent-sky-600" />
              <div className="mt-2 text-xs text-slate-600">Up to {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(maxPrice)}</div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Airlines</h3>
              {airlines.map((a) => (
                <label key={a} className="mb-2 flex items-center gap-3 text-sm text-slate-700">
                  <input type="checkbox" onChange={() => toggleAirline(a)} className="h-4 w-4 accent-sky-600" />
                  {a}
                </label>
              ))}
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Stops</h3>
              <select value={selectedStops} onChange={(e) => setSelectedStops(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
                <option value="all">Any</option>
                <option value="0">Direct only</option>
                <option value="1">1 stop max</option>
              </select>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Options</h3>
              <label className="flex items-center gap-3 text-sm text-slate-700">
                <input type="checkbox" checked={directOnly} onChange={() => {}} className="h-4 w-4 accent-sky-600" />
                Direct flights only
              </label>
            </div>
          </div>
        </aside>

        <section className="space-y-4">
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">No flights found for the selected route/date.</div>
          )}

          {filtered.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={{
                ...flight,
                route: `${flight.from} → ${flight.to}`,
                departure: flight.depart.split('T')[1].slice(0, 5),
                arrival: flight.arrive.split('T')[1].slice(0, 5),
              }}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
