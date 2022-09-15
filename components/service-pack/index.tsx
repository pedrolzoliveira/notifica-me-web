import { formataReal } from '../../utils/formataReal'
import { useRouter } from 'next/router'
import { Button } from '../Button'

interface ServicePackProps {
  data: {
    id: string
    name: string
    description: string
    price: number
    events: string[]
  }
}

export const ServicePack = ({ data }: ServicePackProps) => {
  const router = useRouter()

  return (
        <div className='transition-all border rounded p-4 hover:ring-1 hover:bg-blue-50 cursor-pointer flex flex-col justify-between shadow'>
          <div>
            <h1 className='text-2xl mb-4'>{data.name}</h1>
            <p>{data.description}</p>
            <br/>
            {
              (data.events.length > 0)
                ? <>
                <p>Eventos Cadastrados:</p>
                <ul className="list-disc ml-8">
                  {
                    data.events.map(event => {
                      return <li key={event}>{event}</li>
                    })
                  }
                </ul>
              </>
                : null
            }
          </div>
          <div className='flex justify-evenly items-center py-2'>
            <p className='text-xl text-gray-700 '>{formataReal(data.price)} /mês</p>
            <Button onClick={async () => await router.push(`/plans/${data.id}`)}>Ver Detalhes</Button>
          </div>
        </div>
  )
}
