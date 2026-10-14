import FlightCard from '../components/flight/FlightCard'
import formatCurrency from '../utils/formatCurrency'

const flights = [
  {
    id: 1,
    airline: 'Garuda Indonesia',
    route: 'CGK → DPS',
    departure: '08:00',
    arrival: '10:15',
    price: 1450000,
    duration: '2h 15m',
    badge: 'Best value',
    seats: 7,
  },
  {
    id: 2,
    airline: 'Citilink',
    route: 'CGK → DPS',
    departure: '10:40',
    arrival: '12:55',
    price: 1320000,
    duration: '2h 15m',
    badge: 'Promo',
    seats: 3,
  },
  {
    id: 3,
    airline: 'Batik Air',
    route: 'CGK → DPS',
    departure: '13:20',
    arrival: '15:35',
    price: 1580000,
    duration: '2h 15m',
    badge: 'New',
    seats: 12,
  },
]

const filters = ['Under Rp 1.500.000', 'Garuda Indonesia', 'Citilink', 'Direct flights only']

export default function SearchResult() {
  return (
    <div className="space-y-6">
      <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Flight result</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Jakarta to Bali</h1>
          </div>
          <div className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            27 Nov 2026 • 1 Adult
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-900">Filter</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Price</h3>
              {['Under Rp 1.500.000'].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-600" />
                  {item}
                </label>
              ))}
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Airlines</h3>
              {['Garuda Indonesia', 'Citilink', 'Batik Air'].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="checkbox" defaultChecked={item !== 'Batik Air'} className="h-4 w-4 accent-sky-600" />
                  {item}
                </label>
              ))}
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Other</h3>
              {filters.slice(3).map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="checkbox" className="h-4 w-4 accent-sky-600" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <section className="space-y-4">
          {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </section>
      </div>
    </div>
  )
}
