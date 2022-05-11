//1 True
//2 False
//3 True
// Undefined



function User(name) {
    this.name = name;
  }
  User.prototype = {}; // (*)
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name ); // undefined