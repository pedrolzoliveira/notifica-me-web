import { useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { BsFillGridFill, BsFillBellFill, BsFillPeopleFill } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';


import { OptionSideBar } from './OptionSideBar';

export const SideBar = () => {
    const [] = useState();

    return (
        <div className="sticky top-0 left-0 h-screen min-w-[210px] flex flex-col p-4 space-y-4 border-r">
            <OptionSideBar href=''>
                <>
                    <FiHome/>
                    <p>Home</p> 
                </>
            </OptionSideBar>
            <OptionSideBar href='services'>
                <>
                    <BsFillGridFill/>
                    <p>Planos</p>
                </>
            </OptionSideBar>

            <OptionSideBar href='notifications'>
                <>
                    <BiMessageDetail/>
                    <p>Notificações</p>
                </>
            </OptionSideBar>
            <OptionSideBar href='events'>
                <>
                    <BsFillBellFill/>
                    <p>Eventos</p>
                </>
            </OptionSideBar>
            <OptionSideBar href='receivers'>
                <>
                    <BsFillPeopleFill/>
                    <p>Recebedores</p>
                </>
            </OptionSideBar>
            
        </div>
    )
}