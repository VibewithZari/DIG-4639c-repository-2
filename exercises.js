//3-1 flattening(list) Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
const flatten = arrays => {
    return arrays.reduce((flatArray, currentArray) => {
         return flatArray.concat(currentArray);
    }, []);
};
let arrays = [["Great things are done by a series of small things brought together", "You do not realize you are in the moment, until it is a memory.", "Things happen fast so watch the seasons"], ["One needs more discipline than motivation to get farther ahead", "life is not a rollercoast, it is more like a long path that has twists and turns"], ["Estarías enojado con el mundo cuando experimentas una desgracia, pero es importante recordar exactamente por qué estás enojado"]];
console.log(flatten(arrays));

//2nd way to do it
let arrays = [["Great things are done by a series of small things brought together", "You do not realize you are in the moment, until it is a memory.", "Things happen fast so watch the seasons"], ["One needs more discipline than motivation to get farther ahead", "life is not a rollercoast, it is more like a long path that has twists and turns"], ["Estarías enojado con el mundo cuando experimentas una desgracia, pero es importante recordar exactamente por qué estás enojado"]];
console.log(arrays.reduce((array1, array2) => array1.concat(array2)));

//3-2 3-2. loop(value, test, update, body)
function loop(value, test, update, body) {
    for (let n = value; test(n); n = update(n)) {
        body(n);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);


//3-3 everyLoop
function every(array, test) {
    for (let element of array) {
      if (test(element) === false) {
        return false;
      }
    }
    return true;
  }
  console.log(everyLoop([1, 3, 5], n => n < 10));
  // → true
  console.log(everyLoop([2, 4, 16], n => n < 10));
  // → false
  console.log(everyLoop([], n => n < 10));
  // → true

  //3-4 everySome 
  function every(array, test) {
    return array.some(test);
  }
  //don't know if I was supposed to also put the array some's version of the console log as well, so I just put it
  console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
