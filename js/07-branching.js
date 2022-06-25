/*
 * Оператор ветвеления if
 */

// if (5 > 30) {
//   //  тело
//   console.log('qweqwe');
// }

// console.log('дальше');
/*
 * Оператор ветвления if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

const salary = 5000;

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }

// console.log('qweqwe');

/*
 * Тернарный оператор
 */
// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

/*
 * Блочная область видимости переменных
 */

// if (true) {
//   const a = 5;
//   console.log(b);
// }

// if (true) {
//   const b = 10;

//   console.log(a);
// }

// const message = 'Bohdan -  Antoshkiv';
// console.log(message.split(""));

// // const message = 'JavaScript - це цікаво';
// // console.log(message.split(' '));


// const words = ['Bohdan', 'Antoshkiv', 'is', 'ukrainian'];
// console.log(words.join('')); // "JavaScriptцецікаво"
// console.log(words.join(' ')); // "JavaScript це цікаво"
// console.log(words.join('---'));
// console.log(words.join(''));


// const clients = ['Ivan', 'Bohdan', 'Igor', 'Petro'];
// console.log(clients.indexOf('Bohdan')); // 2
// console.log(clients.indexOf('Monkong'));
// console.log(clients.indexOf('Igor'));
// console.log(clients.indexOf('Ivan'));

// const clients = ['Ivan', 'Bohdan', 'Igor', 'Petro'];
// console.log(clients.includes('Bohdan')); // 2
// console.log(clients.includes('Monkong'));
// console.log(clients.includes('Igor'));
// console.log(clients.includes('Ivan'));

// // Виносимо варіанти в масив
// const redFruits = ["Яблуко", "чорниця", "вишня", "гранат"];
// const fruit = "вишня";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const numbers = [];

// numbers.push(7);
// console.log(numbers); // [7]

// numbers.push(77);
// console.log(numbers); // [7, 77]

// numbers.push(8);
// console.log(numbers); // [7, 77, 8]

// numbers.push(88);
// console.log(numbers); // [7, 77, 8, 88]

// numbers.push(9);
// console.log(numbers); // [7, 77, 8, 88, 9]


const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []