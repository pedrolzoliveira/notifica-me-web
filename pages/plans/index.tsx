import { ServicePack } from '../../components/service-pack'
import { usePlans } from '../../hooks/plans-hooks'

const Services = () => {
  const { data: payload } = usePlans()

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full'>
      {
        payload?.plans.map(plan => {
          return <ServicePack key={plan.id} data={{
            id: plan.id,
            name: plan.name,
            description: plan.description,
            price: plan.price,
            events: plan.events.map(event => event.name)
          }}
            />
        })
      }
    </div>
  )
}

export default Services
