import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
export default function Button({
  className,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={`rounded-tl-2xl rounded-br-2xl bg-lime-400 text-black py-2 px-8 m-1 cursor-pointer ${className}`}
      {...restProps}
    >
      {children}
    </button>
  )
}
