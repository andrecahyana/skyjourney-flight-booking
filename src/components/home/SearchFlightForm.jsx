import { Link } from 'react-router-dom'

export default function SearchFlightForm() {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Flight search</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">Book your next trip</h2>
        </div>
      </div>

      <form className="grid gap-4 md:grid-cols-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">From</label>
          <input defaultValue="Jakarta (CGK)" className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">To</label>
          <input defaultValue="Bali (DPS)" className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Date</label>
          <input type="date" className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Passengers</label>
          <input defaultValue="1 Adult" className="w-full bg-transparent text-base font-medium text-slate-800 outline-none" />
        </div>

        <Link
          to="/search"
          className="flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-4 text-center text-sm font-bold text-white shadow hover:bg-sky-700"
        >
          Search Flight
        </Link>
      </form>
    </section>
  )
}
