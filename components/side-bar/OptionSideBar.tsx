import { MouseEvent, ReactNode } from 'react'
import { useRouter } from 'next/router'

interface OptionSideBarProps {
  children: ReactNode
  href: string
}

export const OptionSideBar = ({ children, href }: OptionSideBarProps) => {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    router.push(`/${href}`)
  }

  const selected = `/${href}` === router.route

  return (
    <a href={href} onClick={handleClick} className={`flex space-x-4 items-center transition-all cursor-pointer rounded px-4 py-2 ${selected ? 'text-white bg-blue-600' : 'hover:ring-1 hover:bg-blue-50'} `}>
      { children }
    </a>
  )
}
