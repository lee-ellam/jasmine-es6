export default class Person {
    constructor (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    greet() {
      return `Hello, my name is ${this.fullName}.`;
    }
};
