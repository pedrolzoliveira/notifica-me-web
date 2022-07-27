import { AdminSideBar } from './AdminSideBar';
import { UserSideBar } from './UserSideBar';

import { useRouter } from 'next/router';


export const SideBar = () => {

    const { route } = useRouter();

    if (/admin/.test(route)) return <AdminSideBar/>

    return <UserSideBar/>
}
