import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suggestions?: string[]
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  roundedTopLeft?: boolean
  roundedTopRight?: boolean
  roundedBottonLeft?: boolean
  roundedBottonRight?: boolean
}
export default function Input({
  suggestions,
  className,
  iconLeft,
  iconRight,
  ...restProps
}: InputProps) {
  const additionalClasses = []
  if (restProps.roundedTopLeft) additionalClasses.push('rounded-tl-2xl')
  if (restProps.roundedTopRight) additionalClasses.push('rounded-tr-2xl')
  if (restProps.roundedBottonLeft) additionalClasses.push('rounded-bl-2xl')
  if (restProps.roundedBottonRight) additionalClasses.push('rounded-br-2xl')

  return (
    <div
      className={`inline relative bg-gray-600 text-gray-300 p-3 m-[0.4px] ${additionalClasses.join(
        ' '
      )} ${className}`}
    >
      {iconLeft && (
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none w-8'>
          <span className='w-4 fill-lime-400'> {iconLeft}</span>
        </div>
      )}

      <input
        className={`bg-gray-600 text-gray-300  focus:outline-none border-transparent mx-6`}
        list='suggestions'
        {...restProps}
      />

      {iconRight && (
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none w-8'>
          <span className='w-4 fill-lime-400'> {iconRight}</span>
        </div>
      )}
      {suggestions && (
        <datalist id='suggestions'>
          {suggestions.map((suggestion) => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>
      )}
    </div>
  )
}
