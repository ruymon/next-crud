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
                <SidebarIcon href="#" title="Users" active>
                    <FiUsers />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiCalendar />
                </SidebarIcon>
                
                <SidebarIcon href='#' disabled>
                    <FiDatabase />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiSettings />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiShield />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiRadio />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiTrendingUp />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiTerminal />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiPackage />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>

                <SidebarIcon href='#' disabled>
                    <FiActivity />
                </SidebarIcon>


            </IconContext.Provider>

            <div className={`fixed bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-white/0`}></div>
        </aside>
    );
}