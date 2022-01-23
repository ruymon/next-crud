import { ReactNode } from "react";

interface TableHeaderProps {
  children: ReactNode,
}

export function TableHeader(props: TableHeaderProps) {
  return(
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Nome Completo
                  </th>
                  <th
                    scope='col'
                    className='text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Firebase ID
                  </th>
                  <th
                    scope='col'
                    className='text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Idade
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {props.children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};