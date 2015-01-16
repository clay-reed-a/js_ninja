function juggle() {
  var result = 0; 
  for (var n = 0; n < arguments.length; n++) {
    result += arguments[n]; 
  }
  this.result = result; 
}

// window this 

juggle(1,2,3);

assert(result === 6,
  "The window has a result");

// apply 

var ninja1 = {};

juggle.apply(ninja1,[1,2,3,4]);

assert(ninja1.result === 10,
  "The first ninja has a result"); 

// call 

var ninja2 = {};

juggle.call(ninja2,5,6,7,8);

assert(ninja2.result === 26,
  "The second ninja has a result");

