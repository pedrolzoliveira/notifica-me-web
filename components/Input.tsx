import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export const Input = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
        <input {...props} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${props.className}`}/>
  )
}
