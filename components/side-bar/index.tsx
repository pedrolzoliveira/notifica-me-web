import { OptionSideBar } from './OptionSideBar'
import { BsFillGridFill, BsFillBellFill, BsFillPeopleFill } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { FaRegIdCard } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useInfo } from '../../hooks/auth-hooks'

export const SideBar = () => {
  const router = useRouter()

  const { data: info } = useInfo()

  if (
    [
      '/signin',
      '/signup'
    ].includes(router.pathname)
  ) return null

  return (
    <div className='sticky top-0 left-0 h-screen sm:min-w-[210px] flex flex-col p-4 space-y-4 border-r justify-between'>
      {
                ((info?.customer) != null)
                  ? <div>
                    <OptionSideBar href='plans'>
                      <BsFillGridFill/>
                      <p className='hidden sm:block'>Meus Planos</p>
                    </OptionSideBar>
                    <OptionSideBar href='notifications'>
                      <BiMessageDetail/>
                      <p className='hidden sm:block'>Notificações</p>
                    </OptionSideBar>
                    <OptionSideBar href='events'>
                      <BsFillBellFill/>
                      <p className='hidden sm:block'>Eventos</p>
                    </OptionSideBar>
                    <OptionSideBar href='receivers'>
                      <BsFillPeopleFill/>
                      <p className='hidden sm:block'>Recebedores</p>
                    </OptionSideBar>
                  </div>
                  : null
            }
      {
                ((info?.admin) != null)
                  ? <div>
                    <p>Admin</p>
                    <OptionSideBar href='admin/plans'>
                      <BsFillGridFill/>
                      <p className='hidden sm:block'>Planos</p>
                    </OptionSideBar>
                    <OptionSideBar href='admin/event-types'>
                      <BsFillBellFill/>
                      <p className='hidden sm:block whitespace-nowrap'>Tipos de Eventos</p>
                    </OptionSideBar>
                    <OptionSideBar href='admin/credentials'>
                      <FaRegIdCard/>
                      <p className='hidden sm:block whitespace-nowrap'>Credenciais</p>
                    </OptionSideBar>
                  </div>
                  : null
            }
    </div>
  )
}
