import { Link, useNavigate } from 'react-router-dom'
import formatCurrency from '../../utils/formatCurrency'

export default function FlightDetail({ flight }) {
  const navigate = useNavigate()

  if (!flight) {
    return <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600">Flight details not found.</div>
  }

  const price = Number(flight.price || 0)
  const baggage = flight.baggage || '20kg'

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Flight details</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">{flight.airline}</h2>
          <p className="mt-1 text-slate-600">{flight.route || `${flight.from} → ${flight.to}`} • {flight.duration}</p>
        </div>

        <div className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          {flight.badge || 'Popular'}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Departure</span>
              <span>Arrival</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-2xl font-black text-slate-900">
              <span>{flight.departure}</span>
              <span>→</span>
              <span>{flight.arrival}</span>
            </div>
            <div className="mt-2 text-sm text-slate-600">
              {flight.route || `${flight.from} → ${flight.to}`} • {flight.duration}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Cabin</div>
              <div className="mt-2 font-bold text-slate-800">Economy</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Baggage</div>
              <div className="mt-2 font-bold text-slate-800">{baggage}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Stops</div>
              <div className="mt-2 font-bold text-slate-800">{flight.stops ?? 0}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4">
            <h3 className="text-lg font-bold text-slate-900">Included in fare</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• 1 cabin bag</li>
              <li>• Flight insurance</li>
              <li>• Free ticket changes up to 24 hours</li>
              <li>• E-ticket confirmation</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Price</div>
          <div className="mt-2 text-3xl font-black text-slate-900">{formatCurrency(price)}</div>
          <div className="mt-3 text-sm text-slate-600">Includes taxes and fees.</div>

          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <div className="flex justify-between"><span>Airline</span><span>{flight.airline}</span></div>
            <div className="flex justify-between"><span>From</span><span>{flight.from}</span></div>
            <div className="flex justify-between"><span>To</span><span>{flight.to}</span></div>
            <div className="flex justify-between"><span>Class</span><span>Economy</span></div>
          </div>

          <button onClick={() => navigate('/passenger', { state: { flight } })} className="mt-6 w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">
            Select this flight
          </button>
          <Link to="/search" className="mt-3 block text-center text-sm font-medium text-sky-700">
            Back to search results
          </Link>
        </div>
      </div>
    </div>
  )
}
