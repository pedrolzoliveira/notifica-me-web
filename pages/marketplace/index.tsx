import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { ServicePack } from '../../components/service-pack'
import { useSearchPlans } from '../../hooks/plans-hooks'

let timeout: NodeJS.Timeout

export const MarketPlace = () => {
  const [searchTextVisual, setSearchTextVisual] = useState('')
  const [searchTextReal, setSearchTextReal] = useState(searchTextVisual)
  const { data: payload, isLoading } = useSearchPlans(searchTextReal)

  useEffect(() => {
    if (searchTextVisual.length > 3 || searchTextVisual.length === 0) {
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => setSearchTextReal(searchTextVisual), 500)
    }
  }, [searchTextVisual])

  return (
    <div className='p-4 w-full space-y-4'>
      <div>
        <input className='bg-red-50' type='text' value={searchTextVisual} onChange={e => setSearchTextVisual(e.target.value)}/>
      </div>
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
