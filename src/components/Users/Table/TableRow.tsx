import Image from "next/image";
import toast from "react-hot-toast";

import { FiClipboard } from "react-icons/fi";
import { StatusBadge } from "../StatusBadge";
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface TableRowProps {
  firebaseId: string;
  avatar: string;
  name: string;
  email: string;
  age: number;
  status: 1 | 2 | 3;
}

export function TableRow({
  firebaseId,
  avatar,
  name,
  email,
  age,
  status,
}: TableRowProps) {
  const notify = () => toast.success('Firebase ID copied to clipboard.');

  return (
    <tr key={firebaseId}>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <Image
              className='h-10 w-10 rounded-full'
              src={avatar}
              alt='Users Avatar'
              width='40'
              height='40'
            />
          </div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>{name}</div>
            <div className='text-sm text-gray-500'>{email}</div>
          </div>
        </div>
      </td>
      <td className='whitespace-nowrap'>
        <div className='text-sm bg-gray-100 w-60 rounded text-gray-700 flex items-center justify-between'>

          <span className='px-3 font-mono'>{firebaseId}</span>

          <CopyToClipboard 
            text={firebaseId}
            onCopy={notify}
          >
            <a
              className='text-gray-600 p-3 border-2 border-gray-200 border-dashed hover:text-gray-700 hover:bg-gray-200 rounded active:text-gray-900 active:bg-gray-300 active:border-solid transition-all transition-slow'
            >
              <FiClipboard />
            </a>

          </CopyToClipboard>
        </div>
      </td>
      <td className='whitespace-nowrap'>
        <StatusBadge status={status} />
      </td>
      <td className='whitespace-nowrap text-sm text-gray-500'>{age}</td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
          Editar
        </a>
      </td>
    </tr>
  );
}
