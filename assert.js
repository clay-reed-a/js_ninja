function assert(bool, msg) {
  var assertions = document.getElementById('assertions');
  var assertion = document.createElement('li');
  assertion.innerText = msg;
  if (bool) {
    assertion.style.color = 'green';
  } else {
    assertion.style.color = 'red';
    assertion.style.textDecoration = 'line-through';
  }
  assertions.appendChild(assertion);
}