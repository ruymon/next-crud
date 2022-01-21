import { IconContext } from 'react-icons';
import { FiActivity, FiCalendar, FiDatabase, FiPackage, FiRadio, FiSettings, FiShield, FiTerminal, FiTrendingUp, FiUsers } from 'react-icons/fi';

import { SidebarHeader } from './SidebarHeader';
import { SidebarIcon } from './SidebarIcon';

export function Sidebar() {
    return(
        <aside className={`
            w-20
            h-screen

            bg-white

            border-gray-100
            border-r-2
            
            p-3

            flex
            flex-col

            overflow-y-auto
            overflow-x-hidden

            hidenScrollbar
        `}>
            <SidebarHeader />

            <div className={`fixed top-0 left-0 w-full h-10 bg-gradient-to-t from-white/0 to-white`}></div>

            <IconContext.Provider value={{ size: "20" }}>
                <SidebarIcon href='#'>
                    <FiUsers />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiCalendar />
                </SidebarIcon>
                
                <SidebarIcon href='#'>
                    <FiDatabase />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiSettings />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiShield />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiRadio />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiTrendingUp />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiTerminal />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiPackage />
                </SidebarIcon>

                <SidebarIcon href='#'>
                    <FiActivity />
                </SidebarIcon>
            </IconContext.Provider>

            <div className={`fixed bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-white/0`}></div>
        </aside>
    );
}