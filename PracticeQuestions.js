
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

const firstFunction = function (num1 = 1, num2 = 2) {
  return num1 + num2 + x
}

console.log('========== 1st solution ==========');
console.log(firstFunction(2, 3));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const secondFunction = (num1 = 1, num2 = 2) => num1 + num2 + x;

console.log('========== 2nd solution ==========');
console.log(secondFunction(2, 3));

// 3. Write a function that returns another function. (use arrow functions please)

const callbackMultiplier = (callback, num1 = 1, num2 = 2, multiplier) => callback(num1, num2) * multiplier

console.log('========== 3rd solution ==========');
console.log(callbackMultiplier(secondFunction, 2, 3, 2));

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log('========== 4th solution ==========');
console.log(getFunction()(2))
console.log('Because y=5 gets read as a local variable before insideFunc is executed through the return, once insideFunc is executed the program already knows y = 5, so it has no problems assigning that value alongside the new return (y+a)');

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {

  if (Math.ceil(Math.random() * 2) < 2) {

    throw new Error("Error was thrown");

  }

  return 'success'
}

const callbackHandler = (callback) => {
  try {

    return callback();

  } catch (e) {

    console.log("sorry there was an error")

  }
}

console.log('========== 5th solution ==========');
console.log(callbackHandler(couldThrowError));


////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

let objectMaker = (array) => {
  let newArray = array.map((element) => {
    return {
      id: element.id,
      favoriteFoods: element.favorites.food.length
    }
  })
  return newArray
}

console.log('========== 6th solution ==========');
console.log(objectMaker(userData));

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

let pizzaPeople = (array) => {
  return array.reduce((accumulator, element) => {
    if (element.favorites.food.includes("pizza")) {
      accumulator.push(element.name);
    }
    return accumulator
  }, [])
}

console.log('========== 7th solution ==========');
console.log(pizzaPeople(userData))

// 7. Show an an example of a switch statement being used

console.log('========== 8th solution ==========');

switch (userData[0].id) {
  case "111":

    console.log('id matched, access authorized');
    break

  default:

    console.log('id not recognized, access denied');
    break
}


////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
};
const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
};


// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

let combinedObjects = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2
  }
}

console.log('========== 9th solution ==========');

const newUser = combinedObjects(userPersonalData, userGameData)

console.log(newUser);


// 9. Make a copy of your new user object but override the birthday to december 31st

const newUserBirthday = {
  ...newUser,
  birthday: "dec 31th"
}

console.log('========== 10th solution ==========');
console.log(newUserBirthday);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const newArray = [...newUserBirthday.accomplishments]

console.log('========== 11th solution ==========');
console.log(newArray)


//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
};

console.log('========== 12th solution ==========');
const food = [...user.favoriteThings.food]

console.log(food)

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const onlyTwoItems = [food[0], food[1]]

console.log('========== 13th solution ==========');
console.log(onlyTwoItems)

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

// let objectMakerTwo = (array, callback) => {
//   let newObject = {
//     name: array[0],
//     age: array[1],
//     food: callback(array),
//   }

//   return newObject
// }

let callbackTwo = (array) => {
  let returnArray = new Array;
  for (let i = 2; i < array.length; i++) {
    returnArray.push(array[i])

  }
  return returnArray;
}

// console.log(objectMakerTwo(data, callbackTwo));

const name = data[0];
const age = data[1];
const foodTwo = callbackTwo(data);

console.log('========== 14th solution ==========');
console.log(name);
console.log(age);
console.log(foodTwo);

// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food: ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

const userName = userInfo.name;
const favoriteFood = userInfo.favorites.needs.food;
const favoritheThing = userInfo.favorites.wants.things[0];
const secondFavoritheThing = userInfo.favorites.wants.things[1];

console.log('========== 15th solution ==========');
console.log(userName);
console.log(favoriteFood);
console.log(favoritheThing);
console.log(secondFavoritheThing);


var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
    try {
      // fetchingData from imaginary database
      if ((Math.ceil(Math.random() * 2)) < 2) {
        throw new Error('Error!')
      }
      resolve({ name: 'john', age: 42 })
    } catch (error) {
      reject(error);
    }
  }, 5000);
});


module.exports = fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
    try {
      // fetchingData from imaginary database
      if ((Math.ceil(Math.random() * 2)) < 2) {
        throw new Error('Error!')
      }
      resolve({ name: 'john', age: 42 })
    } catch (error) {
      reject(error);
    }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('========== 16th solution ==========');
fetchData()
  .then((value) => {
    console.log(value);
  }).catch((error) => {
    console.error(error);
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function logData() {
  try {

    const value = await fetchData();
    console.log(value);
  } catch {
    console.error(error);
  }
}

console.log('========== 17th solution ==========');
logData();