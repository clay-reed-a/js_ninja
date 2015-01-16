var things = ['raindrops', 'roses', 'mittens', 'kittens']

forEach(
  things,
  function(index) {
    assert(this == things[index], // strict equality causes fail,  
      "Expected value");        // maybe because... 
  });

forEach(
  things,
  function(index) {
    assert(typeof this === 'object',
      typeof this); // ...this makes these objs while... 
  });

assert(typeof things[0] === 'string',
  typeof things[0]); // arr elements remain strings.   

// oh well. 

var remix = ''; // ::BLASTS REMIX & DANCES WILDLY:: 

forEach(
  things,
  function(index) {
    remix += this; 
  });

assert("A remix will appear",
  remix + remix.split('').sort().join(''));