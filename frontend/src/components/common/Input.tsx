import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suggestions?: string[]
}
export default function Input({
  suggestions,
  className,
  ...restProps
}: InputProps) {
  return (
    <>
      <input
        className={`bg-gray-600 text-gray-300 p-2 m-[0.2px] ${className}`}
        list='suggestions'
        {...restProps}
      />

      {suggestions && (
        <datalist id='suggestions'>
          {suggestions.map((suggestion) => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>
      )}
    </>
  )
}
