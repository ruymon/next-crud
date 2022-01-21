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
            w-2/3
            bg-white
            text-gray-700
        `}>
            <Title>

            </Title>

        </div>
    );
};