import { ReactNode } from "react";

interface SidebarIconsProps {
    children: ReactNode;
    href: string;
    alt?: string;
    title?: string;
}

export function SidebarIcon (props: SidebarIconsProps) {
    return(
        <a className={`
            flex
            justify-center
            items-center
            p-4
            rounded-xl
            bg-violet-100
            mb-4
            text-violet-700
            hover:text-white
            hover:bg-violet-700
            transition-all
        `} href={props.href}>
            {props.children}
        </a>
    );
}