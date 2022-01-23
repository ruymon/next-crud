import Leite from "leite";
const leite = new Leite();

import { firebaseIdGenerator } from './firebaseIdGenerator';

interface User {
  firebaseId: string,
  avatar: string;
  name: string;
  email: string;
  age: number;
  status: 1 | 2 | 3;
};

export const generateUsers = (amount: number): User[] => {
  const users: User[] = [];

  for (let i = 0; i <= amount; i++) {
    users.push({
      firebaseId: firebaseIdGenerator(),
      avatar: `https://randomuser.me/api/portraits/men/${i}.jpg`,
      name: leite.pessoa.nome({ nomeDoMeioAbreviado: true }),
      email: leite.pessoa.email(),
      age: leite.pessoa.idade({ min: 18, max: 58 }),
      status: Math.floor((Math.random() * 3) + 1),
    } as User);
  }

  return users;
};
