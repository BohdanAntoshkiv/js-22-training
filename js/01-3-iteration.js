// МОЯ ПРАКТИКА ----------------------------------------------------------------

// МОЯ ПРАКТИКА ---------визначаємо ключі і їх значення-------------------------------------------------------

const feedback = {
  good: 55,
  neutral: 15,
  bad: 13,
};

let totalOfFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalOfFeedback += feedback[key]
// }

// console.log(totalOfFeedback);


// МОЯ ПРАКТИКА ---------визначаємо тільки значення-------------------------------------------------------

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  console.log(value);
  totalOfFeedback += value
}

console.log('totalOfFeedback', totalOfFeedback);






// --------------------КОД РЕПЕТИ ----------------------------------------------------

/*
 * Перебор через for...in и Object.keys|values|entries
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);
