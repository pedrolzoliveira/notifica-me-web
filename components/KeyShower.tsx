import { useState } from 'react'
import { BiCopy } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-toastify'

export interface KeyShowerProps {
  key_: string
}

export const KeyShower = ({ key_ }: KeyShowerProps) => {
  const [show, setShow] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(key_)
    toast.success('Chave Copiada')
  }

  return (
    <div className='flex items-center w-full space-x-4'>
      <input
            className='w-full rounded px-4 py-2 border'
            type={`${show ? 'text' : 'password'}`}
            value={key_}
          />
      <button onClick={e => setShow(!show)}>
        {
            show
              ? <AiOutlineEyeInvisible/>
              : <AiOutlineEye/>
        }
      </button>
      <button onClick={handleCopy}>
        <BiCopy />
      </button>
    </div>
  )
}
