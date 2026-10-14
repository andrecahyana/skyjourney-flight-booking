import formatCurrency from '../../utils/formatCurrency'

export default function FlightCard({ flight }) {
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
            <p className="mt-1 text-sm text-slate-500">{flight.duration} • {flight.seats} seats left</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="text-center">
            <p className="text-xl font-black text-slate-900">{flight.departure}</p>
            <p className="text-sm text-slate-500">{flight.route.split(' → ')[0]}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">direct</span>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-slate-900">{flight.arrival}</p>
            <p className="text-sm text-slate-500">{flight.route.split(' → ')[1]}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">from</p>
            <p className="text-2xl font-black text-slate-900">{formatCurrency(flight.price)}</p>
          </div>
          <button className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700">
            Select
          </button>
        </div>
      </div>
    </article>
  )
}
