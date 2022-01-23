import { useState, useEffect } from 'react';

import { generateUsers } from "../../utils/seeder";

import { TableHeader } from "./Table/TableHeader";
import { TableRow } from "./Table/TableRow";

export function UsersTable() {
  const [people, setPeople] = useState([]);
  
  useEffect(() => {
    setPeople(generateUsers(5));
  }, []);

  return (
    <TableHeader>
      {people.map((person) => (
        <TableRow
          key={person.firebaseId}
          firebaseId={person.firebaseId}
          avatar={person.avatar}
          age={person.age}
          email={person.email}
          status={person.status}
          name={person.name}
        />
      ))}
    </TableHeader>
  );
}
