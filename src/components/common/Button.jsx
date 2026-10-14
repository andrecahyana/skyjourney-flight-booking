import React from 'react'

export default function Button({ children, className = '', ...props }){
  return (
    <button
      className={"inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md " + className}
      {...props}
    >
      {children}
    </button>
  )
}
