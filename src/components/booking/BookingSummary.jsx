import formatCurrency from '../../utils/formatCurrency'

export default function BookingSummary({ flight, passenger, tax = 150000 }){
  const ticket = flight?.price || 0
  const total = ticket + tax

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-lg font-bold">Order Summary</h3>

      <div className="mt-3 space-y-2 text-sm text-slate-700">
        <div className="flex justify-between">
          <span>{flight?.from || flight?.route?.split(' → ')[0]} → {flight?.to || flight?.route?.split(' → ')[1]}</span>
          <span>{passenger ? 'Adult x1' : ''}</span>
        </div>

        <div className="flex justify-between">
          <span>Ticket</span>
          <span>{formatCurrency(ticket)}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatCurrency(tax)}</span>
        </div>

        <div className="flex justify-between text-sm font-bold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  )
}
