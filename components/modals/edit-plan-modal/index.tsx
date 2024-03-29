import { FormEvent, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useUpdatePlan } from '../../../hooks/plans-hooks'
import { Button } from '../../Button'
import CurrencyInput from 'react-currency-input-field'
import { useEventTypes } from '../../../hooks/event-types-hooks'

interface EditPlanModalProps {
  plan?: {
    id: string
    name: string
    description: string
    price: number
    events: string[]
  }
  onClose: Function
}

export const EditPlanModal = ({ plan, onClose }: EditPlanModalProps) => {
  if (plan == null) return null

  const NAME_DEFAULT_VALUE = plan.name
  const DESCRIPTION_DEFAULT_VALUE = plan.description
  const PRICE_DEFAULT_VALUE = plan.price

  const { mutateAsync: update, isLoading } = useUpdatePlan(plan.id)
  const { data: eventTypesPaylopad, isLoading: eventTypeLoading } = useEventTypes()

  const [name, setName] = useState(NAME_DEFAULT_VALUE)
  const [description, setDescription] = useState(DESCRIPTION_DEFAULT_VALUE)
  const [price, setPrice] = useState<number | undefined>(PRICE_DEFAULT_VALUE)
  const [events, setEvents] = useState<string[]>(plan.events)

  const handleClose = () => {
    setName(NAME_DEFAULT_VALUE)
    setDescription(DESCRIPTION_DEFAULT_VALUE)
    setPrice(PRICE_DEFAULT_VALUE)
    setEvents([])
    onClose()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return

    await update({
      name,
      description,
      price: price as number,
      events
    })

    handleClose()
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-8 w-96">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h1 className="font-semibold text-gray-700 text-xl">
            Editar Plano
          </h1>
          <div className="pt-4">
            <label htmlFor="name" className="text-gray-700 font-semibold">
              Nome
            </label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="pt-4">
            <label htmlFor="name" className="text-gray-700 font-semibold">
              Descrição
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
          </div>
          <div>
            <span className='text-gray-700 font-semibold'>Eventos</span>
            <div className='flex flex-col space-y-1 h-32'>
              {
                eventTypeLoading
                  ? <AiOutlineLoading3Quarters className='animate-spin'/>
                  : null
              }
              {
                eventTypesPaylopad?.eventTypes.map(event => {
                  return (
                    <div className='flex items-center space-x-2' key={event.code}>
                      <input type='checkbox' checked={events?.includes(event.code)} onChange={e => {
                        if (e.target.checked) {
                          setEvents([...events, event.code])
                        } else {
                          setEvents(events?.filter(str => str !== event.code))
                        }
                      }} className='cursor-pointer'/>
                      <span>
                        {event.code}
                      </span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div>
            <label htmlFor="number" className="text-gray-700 font-semibold">
              Preço
            </label>
            <CurrencyInput
            onValueChange={(_, __, values) => {
              setPrice(Number(values?.float) * 100)
            }}
            prefix="R$ "
            allowDecimals
            allowNegativeValue={false}
            defaultValue={PRICE_DEFAULT_VALUE / 100}
            placeholder="R$"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="space-x-4 w-full flex pt-4">
            <Button className="w-full" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
            className='w-full flex items-center justify-center'
            type="submit"
            >
              {
                isLoading
                  ? (
                    <AiOutlineLoading3Quarters className="animate-spin"/>
                    )
                  : (
                      'Salvar'
                    )
              }

            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
