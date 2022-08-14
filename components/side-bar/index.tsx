import { OptionSideBar } from './OptionSideBar';
import { BsFillGridFill, BsFillBellFill, BsFillPeopleFill } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { FiHome } from 'react-icons/fi';
import { FaRegIdCard } from 'react-icons/fa';

export const SideBar = () => {
    return (
        <div className='sticky top-0 left-0 h-screen sm:min-w-[210px] flex flex-col p-4 space-y-4 border-r justify-between'>
            <div>
                <OptionSideBar href=''>
                    <FiHome/>
                    <p className='hidden sm:block'>Home</p> 
                </OptionSideBar>
                <OptionSideBar href='plans'>
                    <BsFillGridFill/>
                    <p className='hidden sm:block'>Planos</p>
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
            <div>
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
        </div>
    )
}
