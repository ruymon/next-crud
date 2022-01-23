import { FiUsers } from 'react-icons/fi';

export function Title(props) {
    return(
        <div>
            <h1 className="text-gray-700 text-2xl mb-2 flex items-center ">
                <span className="mr-2 p-2 text-violet-700 bg-violet-100 rounded-md"><FiUsers /></span>
                {props.children}
            </h1>
            <hr/>
        </div>
    )
}