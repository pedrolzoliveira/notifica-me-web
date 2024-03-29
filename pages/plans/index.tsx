import { useMyPlans } from '../../hooks/plans-hooks'
import { Badge } from '../../components/Badge'
import { Table, TBody, Td, Th, THead, Tr } from '../../components/Table'
import { Button } from '../../components/Button'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Plans = () => {
  const router = useRouter()
  const { data: payload, isLoading } = useMyPlans()

  return (
    <div className='p-4 w-full h-full space-y-4'>
      <div className='flex justify-between mb-4'>
        <h1 className='font-bold text-lg'>Meus Planos</h1>
        <Button onClick={async e => await router.push('/marketplace')}>Mais planos</Button>
      </div>
      {
        isLoading
          ? <AiOutlineLoading3Quarters className='animate-spin w-full'/>
          : <Table>
            <THead>
              <tr>
                <Th className='w-28'>Nome</Th>
                <Th className='2-28'>Descrição</Th>
                <Th>Eventos</Th>
              </tr>
            </THead>
            <TBody>
              {
            payload?.plans.map(plan => {
              return (
                <Tr key={plan.id}>
                  <Td>{plan.name}</Td>
                  <Td>{plan.description}</Td>
                  <Td className='space-x-1'>
                    {
                    plan.events.map(event => <Badge key={event.code}>{event.code}</Badge>)
                  }
                  </Td>
                </Tr>
              )
            })
          }
            </TBody>
          </Table>
      }
    </div>
  )
}

export default Plans
