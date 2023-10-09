/*Example 3 - User

Write a class `User` which creates an object with properties `login` and `email`.

Declare private properties `#login` and `#email`, which can be accessed via
getter and setter of `login` and `email`.
*/

class User {
  #login
  #email;
  
  constructor({ email, login }) {
    this.#email = email;
    this.#login = login;
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
}


const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango.login); 
mango.login = 'Mangodoge';
console.log(mango.login); 


const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.email);
poly.email = "polycutie@mail.com";
console.log(poly.email);