import { FormEvent, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Button } from '../../components/Button'
import { ServicePack } from '../../components/service-pack'
import { useSearchPlans } from '../../hooks/plans-hooks'

export const MarketPlace = () => {
  const [searchTextVisual, setSearchTextVisual] = useState('')
  const [searchTextReal, setSearchTextReal] = useState(searchTextVisual)
  const { data: payload, isLoading } = useSearchPlans(searchTextReal)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTextReal(searchTextVisual)
  }

  return (
    <div className='p-4 w-full space-y-4'>
      <form onSubmit={onSubmit}
        className='flex items-center space-x-2 w-full'>
        <input
          className='w-full rounded px-4 py-2 border bg-gray-50'
          type='text'
          value={searchTextVisual}
          onChange={e => setSearchTextVisual(e.target.value)}/>
        <Button>Pesquisar</Button>
      </form>
      {
        isLoading
          ? <AiOutlineLoading3Quarters className='animate-spin'/>
          : <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
            {
              payload?.plans.map(plan => <ServicePack key={plan.id} data={{
                ...plan,
                events: plan.events.map(event => event.code)
              }}/>)
            }
          </div>
      }
    </div>
  )
}

export default MarketPlace
