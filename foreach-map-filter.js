/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

//Creating a sample array
const numArray = [2,3,4,15];

//Using forEach
function doubleValues(arr){
    const doubledArr = [];
    arr.forEach(function(num){
       doubledArr.push(num * 2); 
    });
    return doubledArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    const evenOnly = [];//Creates a new array
    arr.forEach(function(num){//iterates through each value
        if(num % 2 === 0){//if the current value is even, it pushes it into the new array
            evenOnly.push(num);
        }
    });
    return evenOnly;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
//Creating a sample array to test
const strArray = ['gerardo','jessica','maya','toby','stanley'];

function showFirstAndLast(arr){
    const firstAndLastArr = [];//Creates a new array
    arr.forEach(function(str){
        let firstLetter = str[0];//saves the first and last letters in a variable then adds those together to form a string, which then gets pushed into the new array
        let lastLetter = str[str.length-1];
        let firstAndLastStr = firstLetter + lastLetter;

        firstAndLastArr.push(firstAndLastStr);
    });
    return firstAndLastArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
//Creating a sample obj Array to test
const keyAndVals = [
    {name: 'gerardo'},
    {name: 'jessica'},
    {name: 'maya'},
    {name: 'toby'},
    {name: 'stanley'}
];

function addKeyAndValue(arr,key,value){
    arr.forEach(function(obj){//iterates through each object an assigns the value to each key
       obj[key] = value;
    });
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1};
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
//Creating a series of strings to test
const testStr1 = 'YankeEs';
const testStr2 = 'ArsEnal';
const testStr3 = 'PortuUgal';
const testStr4 = 'JJJJJLLJHGYRHB';

//creating a function that takes in a character and determines if it is a vowel(true or false)
function isVowel(char){
    const vowels = 'aeiou';//String of possible vowels
    return vowels.indexOf(char) != -1;
}

function vowelCount (str){
    const vowelObj = {};// creates an object with vowel counts
    const charArray = str.split('');//creates an array of the characters of the str to help us with looping

    charArray.forEach(function(letter){
        const lowerCaseLetter = letter.toLowerCase();//converts each letter to lowercase so that we can count uppercase letters too
        if(isVowel(lowerCaseLetter)){//checks if current letter is a vowel
            if(vowelObj[lowerCaseLetter]){//if it is a vowel and already counted for, it increases count by 1
                vowelObj[lowerCaseLetter]++;
            } else {//if it is a vowel and not accounted for, it creates a count for it and increases it by 1 and adds it to the obj
            let letterCount = 0;
            letterCount++;
            vowelObj[lowerCaseLetter] = letterCount; 
            }
        }
    });
    return vowelObj;
}

//Using Map
/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
   const doubledNums = arr.map(function(num){
        return num * 2;
    });
    return doubledNums;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    const numTimesIndex = arr.map(function(num, index){
        return num * index;
    });
    return numTimesIndex;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

//Creating array to test
const testingObj = [{name:'gerardo'}, {name:'jessica'}, {name:'Mayinha'}];

function extractKey(arr, key){
    const keyArray = arr.map(function(obj){
        return obj[key];
    });
    return keyArray;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

//Creating a test Array
const testFirstAndLastNameArr = [
    {first: 'Elie', last:"Schoppik"}, 
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"}, 
    {first: 'Colt', last:"Steele"}
    ];

function extractFullName(arr){
    const fullnameArr = arr.map(function(name){
        return name.first + ' ' + name.last;
    });
    return fullnameArr;
}

//Using Filter
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

//Creating a test array
const testFilterArr = [{name: 'Gerardo', isSoftwareEngineer: true}, {name: 'Jessica', isSoftwareEngineer: false}]

function filterByValue(arr, key) {
    const valueArr = arr.filter(function(obj){
        return obj[key];
    });
    return valueArr;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function(element){
       return element === searchValue;
    })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

//creating test array
const findInObjTest = [{name: 'Gerardo', isSoftwareEngineer: true}, {name: 'Jessica', isSoftwareEngineer: false}, {name: 'Mayinha', isSoftwareEngineer: true}];
function findInObj(arr, key, searchValue) {
    return arr.filter(function(obj){
        return obj[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const lowercaseStr = str.toLowerCase();
    const charArr = lowercaseStr.split('');//splitting the string into a char array

   const resultArr = charArr.filter(function(letter){
        return !isVowel(letter); //returns letters that are not vowels
    });    
    return resultArr.join('');//Joins the filtered array back into a string
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

//creating a test array
const testOdds = [1,2,3,4,5,6,7,8,9,10];

function doubleOddNumbers(arr) {
   const justOdds = arr.filter(function(num){
        return num % 2 !== 0;
    });

    const doubledOdds = justOdds.map(function(num){
        return num * 2;
    });
    
    return doubledOdds;
}