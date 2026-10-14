import { useNavigate } from 'react-router-dom'
import formatCurrency from '../../utils/formatCurrency'

export default function FlightCard({ flight }) {
  const navigate = useNavigate()

  function handleSelect() {
    navigate('/passenger', { state: { flight } })
  }

  function handleDetail() {
    navigate(`/flight/${flight.id}`, { state: { flight } })
  }

  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-lg font-bold text-sky-700">
            {flight.airline.slice(0, 2).toUpperCase()}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900">{flight.airline}</h3>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {flight.badge}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{flight.duration} • {flight.seats} seats left • {flight.stops ?? 0} stop(s)</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="text-center">
            <p className="text-xl font-black text-slate-900">{flight.departure}</p>
            <p className="text-sm text-slate-500">{flight.route ? flight.route.split(' → ')[0] : flight.from}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">{flight.stops === 0 ? 'direct' : 'connecting'}</span>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-slate-900">{flight.arrival}</p>
            <p className="text-sm text-slate-500">{flight.route ? flight.route.split(' → ')[1] : flight.to}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">from</p>
            <p className="text-2xl font-black text-slate-900">{formatCurrency(flight.price)}</p>
          </div>

          <div className="flex flex-col gap-2">
            <button onClick={handleDetail} className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700 hover:bg-sky-100">
              View details
            </button>
            <button onClick={handleSelect} className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-sky-700">
              Select
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
