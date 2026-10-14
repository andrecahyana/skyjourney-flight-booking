import React from 'react'

const Navbar = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">SKYJOURNEY</div>
      <nav className="space-x-4">
        <a href="#" className="text-slate-600 hover:text-slate-900">Home</a>
        <a href="#" className="text-slate-600 hover:text-slate-900">Search</a>
      </nav>
    </div>
  </header>
)

const Footer = () => (
  <footer className="bg-gray-50 mt-8">
    <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} SkyJourney — Built for Portfolio
    </div>
  </footer>
)

export default function MainLayout({ children }){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">{children}</main>
      <Footer />
    </div>
  )
}
