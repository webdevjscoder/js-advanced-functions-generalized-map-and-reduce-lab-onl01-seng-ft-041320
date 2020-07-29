// Add your functions here
function map(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
}

function reduce(obj, cb, accumulator) {
    const keys = Object.keys(obj)
    console.log(keys)
    let i = 1
    if (accumulator) {
      i = 0
    } else {
      accumulator = obj[keys[0]]
    }
    for (i; i < keys.length; i++) {
      accumulator = cb(accumulator, obj[keys[i]])
    }
    return accumulator
  }