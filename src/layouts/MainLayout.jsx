import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Search', to: '/search' },
  { label: 'Booking', to: '/search' },
]

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-lg font-bold text-white shadow-sm">
              S
            </div>
            <div>
              <div className="text-lg font-black tracking-[0.2em] text-slate-900">SKYJOURNEY</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">flight booking</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-sky-700' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 md:inline-flex">
              Log in
            </button>
            <button className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">
              Book now
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-10">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 SkyJourney. Crafted for a professional frontend portfolio.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Help</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
