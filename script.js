function creep() { return this; }

assert(creep() === window,
  "Creeping in the window");

var sneak = creep; 

assert(sneak() === window,
  "Sneaking in the window");


assert(creep.name === 'creep',
  "Creep is called creep");
assert(sneak.name === 'creep',
  "Sneak is called creep");

var ninja1 = {
  skulk: creep 
};

assert(ninja1.skulk() === ninja1,
  "The first ninja is skulking");

// Question was about: 
// "We don't say creep() has *become* a
// method of ninja1; it hasn't..." on p 51. 

assert(ninja1.skulk.name === 'creep',
  'ninja1.skulk is called creep');

// 'Well...' you may say.  
// I think the main point for Resig & Bibeault is: 
// "creep() is its own independent function
// that can be invoked in numerous ways."
// It still seems to me like there is no "copy"
// of creep() being made here, no new definition, 
// no weird magic causing the name to change
// behind the scenes,
// so ninja1.skulk is therefore a reference 
// to none other than creep(), 
// only the original creep()
// still can be referenced as well. 

var ninja2 = {
  skulk: sneak
};

assert(ninja2.skulk() === ninja2,
  "The second ninja is skulking");

assert(ninja2.skulk.name === 'creep',
  "All of the creeps are called creep");