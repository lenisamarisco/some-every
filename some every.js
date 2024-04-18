function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    });
}
// Test cases
console.log(hasOddNumber([1, 2, 3, 2, 2, 2, 4])); // true
console.log(hasOddNumber([2, 2, 2, 2, 2, 4])); // false

function hasAZero(num) {
    return String(num).includes('0');
  }
  
  // Test cases
  console.log(hasAZero(3332123213101232321)); // true
  console.log(hasAZero(1212121)); // false
  

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
        return val % 2 !== 0;
    });
}

console.log(hasOnlyOddNumbers([1,3,5,7])); // true
console.log(hasOnlyOddNumbers([1,2,3,5,7])); // false

function hasNoDuplicates(arr) {
    // Use a Set to store unique values encountered
    const uniqueValues = new Set();
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the value is already in the set, return false
        if (uniqueValues.has(arr[i])) {
            return false;
        }
        // Otherwise, add the value to the set
        else {
            uniqueValues.add(arr[i]);
        }
    }
    
    // If we reach this point, there are no duplicates
    return true;
}

console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3])); // true

function hasCertainKey(arr, key) {
    // Use the every method to check if every object in the array contains the specified key
    return arr.every(function(obj) {
        return obj.hasOwnProperty(key);
    });
}
var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];

console.log(hasCertainKey(arr, 'title', 'Instructor')); // true
console.log(hasCertainKey(arr, 'first', 'Elie')); // false
