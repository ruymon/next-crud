export default class User {
  #id: string;
  #name: string;
  #email: string;
  #status: 1 | 2 | 3;
  #age: number;

  constructor(name: string, email: string, status: 1 | 2 | 3, age: number, id: string = null) {
    this.#name = name;
    this.#email = email;
    this.#status = status;
    this.#age = age;
    this.#id = id;
  };

  static empty() {
    return new User('', '', 3, 0);
  };

  get id() {
    return this.#id;
  };

  get name() {
    return this.#name;
  };

  get email() {
    return this.#email;
  };

  get status() {
    return this.#status;
  };

  get age() {
    return this.#age;
  };
};