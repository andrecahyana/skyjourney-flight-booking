import React from 'react'

export default function PaymentMethod({ method, onChange }){
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-3">
        <input type="radio" name="payment" checked={method === 'virtual'} onChange={()=>onChange('virtual')} className="h-4 w-4 accent-sky-600" />
        <div>
          <div className="text-sm font-semibold">Virtual Account</div>
          <div className="text-xs text-slate-500">Bank transfer via virtual account</div>
        </div>
      </label>

      <label className="flex items-center gap-3">
        <input type="radio" name="payment" checked={method === 'card'} onChange={()=>onChange('card')} className="h-4 w-4 accent-sky-600" />
        <div>
          <div className="text-sm font-semibold">Credit Card</div>
          <div className="text-xs text-slate-500">Pay with Visa, Mastercard, JCB</div>
        </div>
      </label>

      <label className="flex items-center gap-3">
        <input type="radio" name="payment" checked={method === 'ewallet'} onChange={()=>onChange('ewallet')} className="h-4 w-4 accent-sky-600" />
        <div>
          <div className="text-sm font-semibold">E-Wallet</div>
          <div className="text-xs text-slate-500">OVO, GoPay, Dana</div>
        </div>
      </label>
    </div>
  )
}
