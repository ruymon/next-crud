interface StatusProps {
  status: number
}

export function StatusBadge({ status }: StatusProps) {
  const statusStyles = {
    1: 'bg-green-100 text-green-700',
    2: 'bg-red-100 text-red-700',
    3: 'bg-blue-100 text-blue-700',
  };

  const statusDictionary = {
    1: 'Active',
    2: 'Inactive',
    3: 'Pending',
  };

  return (
    <span className={`${statusStyles[status]} px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}>
      {statusDictionary[status]}
    </span>
  );
}
