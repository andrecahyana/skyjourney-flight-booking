import SearchFlightForm from '../components/home/SearchFlightForm'

const popularRoutes = [
  { route: 'Jakarta → Bali', tag: 'Best seller' },
  { route: 'Jakarta → Yogyakarta', tag: 'Weekend' },
  { route: 'Jakarta → Surabaya', tag: 'Business' },
]

const highlights = [
  { title: 'Fast Search', text: 'Filter flights instantly by route, time, and price.' },
  { title: 'Secure Payment', text: 'Booking experience designed to feel trustworthy and simple.' },
  { title: 'Flexible Trips', text: 'Ideal for weekend escapes and work trips alike.' },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500 p-6 text-white shadow-xl shadow-sky-200 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-sky-100 uppercase backdrop-blur-sm">
              Fly smarter
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-tight md:text-6xl">
              Fly Anywhere <span className="text-sky-100">With Confidence</span>
            </h1>

            <p className="mt-4 max-w-lg text-base text-sky-50/90 md:text-lg">
              Find the best flight deals, compare routes, and complete your booking in minutes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-md hover:bg-sky-50">
                Search flights
              </button>
              <button className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                View promo
              </button>
            </div>
          </div>

          <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-sm ring-1 ring-white/15">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-100/90">Trending route</p>
            <div className="mt-4 flex items-center justify-between text-2xl font-bold">
              <span>CGK</span>
              <span className="text-xl text-sky-100">→</span>
              <span>DPS</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-sky-100/90">
              <span>27 Nov 2026</span>
              <span>From Rp 1.450.000</span>
            </div>
          </div>
        </div>
      </section>

      <SearchFlightForm />

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              ✦
            </div>
            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Popular destinations</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">Explore trending flights</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {popularRoutes.map((item) => (
            <div key={item.route} className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-slate-800">{item.route}</p>
                <span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {item.tag}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600">Flexible departure times and competitive fares available.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
