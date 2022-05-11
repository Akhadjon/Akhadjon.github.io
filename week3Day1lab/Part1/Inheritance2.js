
// Working with prototype

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3)


//1 true, taken from rabbit.
//2 null, taken from animal.
//3 undefined, there’s no such property any more.


// Searching algorithm
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  alert( pockets.pen ); // 3
  alert( bed.glasses ); // 1
  alert( table.money ); // undefined

  //Where does it write?
