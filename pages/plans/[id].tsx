import { useRouter } from 'next/router'
import { usePlan } from '../../hooks/plans-hooks'

// eslint-disable-next-line react/display-name
export default () => {
  const router = useRouter()
  const { id } = router.query

  const { data: payload, isLoading } = usePlan(id as string)

  if (isLoading) {
    return (
      <div>Carregando...</div>
    )
  }

  return (
    <div>
      <h1>{payload?.plan.name}</h1>
      <p>{payload?.plan.description}</p>
    </div>
  )
}
