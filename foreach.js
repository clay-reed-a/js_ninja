function forEach(arr, callback) {
  for(var i = 0; i < arr.length; i++) {
    // Function.prototype.call(obj,args);
    callback.call(arr[i], i);
  }
}