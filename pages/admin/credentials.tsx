import { useState } from 'react'
import { Button } from '../../components/Button'
import { Table, THead, TBody, Tr, Td, Th } from '../../components/Table'
import { CreateCredentialModal } from '../../components/modals/create-credential-modal'
import { useCredentials, useDestroyCredential } from '../../hooks/credentials-hooks'
import { TrashButton } from '../../components/TrashButton'
import { KeyShower } from '../../components/KeyShower'

const Credential = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const { data: payload } = useCredentials()

  return (
    <div className='p-4 w-full'>
      <div className='flex justify-between pb-4'>
        <h1 className='font-bold text-lg'>Minhas Credenciais</h1>
        <Button onClick={() => setCreateModalOpen(true)}>Adicionar</Button>
      </div>
      <Table>
        <THead>
          <tr>
            <Th className='w-36'>Evento</Th>
            <Th className='w-36'>Nome</Th>
            <Th className=''>Chave</Th>
            <Th className='w-48'>Criado em</Th>
            <Th className='w-12'>Ações</Th>
          </tr>
        </THead>
        <TBody>
          {
            payload?.credentials.map(credential => {
              return (
                <Tr key={credential.id}>
                  <Td className='font-semibold'>{credential.eventCode}</Td>
                  <Td>{credential.name}</Td>
                  <Td><KeyShower key_={credential.key}/></Td>
                  <Td>{new Date(credential.createdAt).toLocaleDateString()}</Td>
                  <Td><TrashButton useMutation={() => useDestroyCredential(credential.id)}/></Td>
                </Tr>
              )
            })
          }
        </TBody>
      </Table>
      <CreateCredentialModal open={createModalOpen} onClose={() => setCreateModalOpen(false)}/>
    </div>
  )
}

export default Credential
