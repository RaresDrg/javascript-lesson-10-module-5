/*Example 1 - Blogger

Write a `Blogger` class to create a blogger object with the following properties:

- `email` - mail, line
- `age` - age, number
- `numberOfPosts` - number of posts, number
- `topics` - an array of topics the blogger specializes in

The class expects one parameter - object of settings with the same name properties.

Add a `getInfo()` method that returns string:
`User ${mail} is ${age} years old and has ${number of posts} posts`.

Add the `updatePostCount(value)` method, which in the `value` parameter takes
number of posts to add to the user.
*/

class Blogger {
  constructor({ email, age, numberOfPosts, topics }) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  email: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});

console.log(mango.getInfo());
mango.updatePostCount(5);
console.log(mango.getInfo()); 


const poly = new Blogger({
  email: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});

console.log(poly.getInfo()); 
poly.updatePostCount(4);
console.log(poly.getInfo()); 