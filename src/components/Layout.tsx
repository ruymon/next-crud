import { Title } from "./Title";

interface LayoutProps {
    title: string;
    children: any;
}

export function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex
            flex-col
            w-full
            p-4
            bg-white
            text-gray-700
        `}>
            <Title>
                {props.title}
            </Title>

            <div className="mt-2">
                {props.children}
            </div>
        </div>
    );
}; 