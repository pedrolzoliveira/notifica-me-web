import { FormEvent, useState, ChangeEvent } from 'react'
import { useCreateEventType } from '../../../hooks/event-types-hooks'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Button } from '../../Button'

interface CreateEventTypesModalProps {
  open: boolean
  onClose: Function
}

export const CreateEventTypesModal = ({ open, onClose }: CreateEventTypesModalProps) => {
  const { mutateAsync: create, isLoading } = useCreateEventType()

  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCode = e.target.value.replace(/\s/g, '')
    setCode(newCode)
  }

  const handleClose = () => {
    setCode('')
    setName('')
    setDescription('')
    onClose()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return
    await create({
      code,
      name,
      description
    })
    handleClose()
  }

  if (!open) return null

  return (
    <div className='absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white rounded p-8 w-96'>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <h1 className='font-semibold text-gray-700 text-xl'>Criar Tipo de Evento</h1>
          <div className='pt-4'>
            <label htmlFor='number' className='text-gray-700 font-semibold'>Código</label>
            <input type='text' value={code} onChange={handleCodeChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
          </div>
          <div>
            <label htmlFor='number' className='text-gray-700 font-semibold'>Nome</label>
            <input type='text' value={name} onChange={e => setName(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
          </div>
          <div>
            <label htmlFor='number' className='text-gray-700 font-semibold'>Descrição</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
          </div>
          <div className='space-x-4 w-full flex pt-4'>
            <Button className='w-full' onClick={handleClose}>Cancelar</Button>
            <Button className='w-full flex items-center justify-center' type='submit'>
              {
                                isLoading
                                  ? <AiOutlineLoading3Quarters className='animate-spin'/>
                                  : 'Adicionar'
                            }

            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
