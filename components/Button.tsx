import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export const Button = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
        <button {...props} className={`transition-all bg-blue-500 hover:ring-1 px-4 py-2 rounded text-white ${props.className ? props.className : ''}`}>
            { props.children }
        </button>
  )
}
