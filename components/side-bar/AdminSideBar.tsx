import { OptionSideBar } from './OptionSideBar';
import { BsFillGridFill, BsFillBellFill } from 'react-icons/bs';
import { FaRegIdCard } from 'react-icons/fa';

export const AdminSideBar = () => {
    return (
        <div className='sticky top-0 left-0 h-screen sm:min-w-[210px] flex flex-col p-4 space-y-4 border-r'>
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
    )
}
