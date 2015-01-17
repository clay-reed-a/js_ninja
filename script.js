var agent = {
  signal: function beep(n) {
    return n > 1 ? beep(n-1) + '-beep' : 'beep';
  }
};

// I cannot call beep() from the top level. 
// I cannot call any such thing as agent.beep().
// References to beep() seem to only exist inside beep().  

assert(agent.signal(3) === 'beep-beep-beep', 
  'Inline functions!'); 

// Neither can I, for instance... 
window.beep = function signal() { 
  return 'They call me '+signal.name+'.';
};
// then reference signal() from the top level.

assert(beep() === 'They call me signal.',
  'beep() says it wants to be called signal.');