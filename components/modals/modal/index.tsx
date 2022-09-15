import { ReactFragment } from 'react'

interface ModalProps {
  open: boolean
  children: ReactFragment
  onClose?: Function

}

export const Modal = ({ children, open }: ModalProps) => {
  if (!open) return null

  return (
    <div>
      { children }
    </div>
  )
}
