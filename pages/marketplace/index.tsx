import { ServicePack } from '../../components/service-pack'
import { usePlans } from '../../hooks/plans-hooks'

export const MarketPlace = () => {
  const { data: payload } = usePlans()

  return (
    <div>
      <div>

        <p>Aqui teremos tudo sobre o marketplace!</p>
        <p>Infelizmente eu sou muito pouco criativo, então vamos lá!</p>
      </div>
      {
        payload?.plans.map(plan => <ServicePack key={plan.id} data={{
          ...plan,
          events: plan.events.map(event => event.code)
        }}/>)
      }
    </div>
  )
}

export default MarketPlace
