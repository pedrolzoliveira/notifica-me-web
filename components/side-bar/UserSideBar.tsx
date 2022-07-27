import { FiHome } from 'react-icons/fi';
import { BsFillGridFill, BsFillBellFill, BsFillPeopleFill } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { OptionSideBar } from './OptionSideBar';

export const UserSideBar = () => {
    return (
        <div className='sticky top-0 left-0 h-screen sm:min-w-[210px] flex flex-col p-4 space-y-4 border-r'>
            <OptionSideBar href=''>
                <FiHome/>
                <p className='hidden sm:block'>Home</p> 
            </OptionSideBar>
            <OptionSideBar href='admin/event-types'>
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
    )
}
