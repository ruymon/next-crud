import { ReactNode } from "react";
import toast from "react-hot-toast";

interface SidebarIconsProps {
  children: ReactNode;
  href: string;
  active?: boolean;
  disabled?: boolean;
  title?: string;
}

export function SidebarIcon(props: SidebarIconsProps) {
  const notify = () => toast.error('Esse recurso ainda não está disponível.');
  
  return (
    <a
      className={`
        flex
        justify-center
        items-center

        mb-4
        p-4

        rounded-xl
        bg-violet-100
        text-violet-700

        transition-all
        
        ${props.active ? "bg-violet-700 text-white" : ""}
        ${
          props.disabled
            ? "bg-violet-100 text-violet-300 cursor-not-allowed"
            : "hover:text-white hover:bg-violet-700"
        }
    `}
      onClick={props.disabled ? notify : undefined}
      href={props.disabled ? undefined : props.href}
      title={props.title}
    >
      {props.children}
    </a>
  );
}
