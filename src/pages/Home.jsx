import React from 'react'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

export default function Home(){
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold">Fly Anywhere With Confidence</h1>
        <p className="text-slate-600 mt-2">Search and book flights in a few clicks.</p>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
          <div className="md:col-span-1">
            <label className="text-sm text-slate-600 block mb-1">From</label>
            <Input defaultValue="Jakarta (CGK)" />
          </div>

          <div className="md:col-span-1">
            <label className="text-sm text-slate-600 block mb-1">To</label>
            <Input defaultValue="Bali (DPS)" />
          </div>

          <div className="md:col-span-1">
            <label className="text-sm text-slate-600 block mb-1">Depart</label>
            <Input type="date" />
          </div>

          <div className="md:col-span-1">
            <label className="text-sm text-slate-600 block mb-1">Passengers</label>
            <Input defaultValue="1 Adult" />
          </div>

          <div className="md:col-span-1">
            <Button type="submit" className="w-full">Search Flight</Button>
          </div>
        </form>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Popular Destination</h3>
          <p className="text-sm text-slate-600 mt-2">Bali, Yogyakarta, Surabaya</p>
        </article>

        <article className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Why SkyJourney</h3>
          <p className="text-sm text-slate-600 mt-2">Fast search, secure payment, e-ticket.</p>
        </article>

        <article className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Mobile Friendly</h3>
          <p className="text-sm text-slate-600 mt-2">Responsive layout and accessible controls.</p>
        </article>
      </section>
    </div>
  )
}
