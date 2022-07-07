

// МОЯ ПРАКТИКА ----------------------------------------------------------------

// const playlist = {
//   name: "my playlist",
//   rating: 4,
//   tracs: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// }

// console.log(playlist)

// const myPlaylist = {
//   name: 'Bohdan Antoshkiv',
//   rating: 10,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// console.log(myPlaylist);

// const x = {} - це обєкт (бо фігурні дужки () після знаку =)!!!!!!!!!!!!!!!!!!!

const myFunction = function (myObject) {
  //   myObject = { a: 777, b: 666 }
  // console.log(myObject)
};

myFunction({ Do: 'Я вчу JS' });
myFunction({ will: 'я вивчу JS' });
myFunction({ a: 'тренуюся викликаю функції' });
myFunction({ b: 'це раз викликаю функцію' });
myFunction({ c: 'і ще раз викликаю функцію' })
myFunction({ c: 'надіюся що вже запамятав як її викликати' });


// МОЯ ПРАКТИКА ---------Вчуся викликати значення властивості з обєкта-------------------------------------------------------

const myPlaylist = {
  name: 'Bohdan Antoshkiv',
  rating: 10,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

myPlaylist.language = 'ukrainian';
myPlaylist.rating = 777;
  // console.log(myPlaylist);

// console.log(myPlaylist);
// console.log(myPlaylist.name);
// console.log(myPlaylist.rating);
// console.log(myPlaylist.trackCount);
// console.log(myPlaylist.tracks);

// КЛЮЧ Властивості завжди строка
// При зверненні до неіснуючого ключа повернеться undefined
// можна звертатися до ключа через квадратні дужки []
// console.log(myPlaylist.name) те саме що console.log(myPlaylist['name']);
// console.log(myPlaylist['name']);
// console.log(myPlaylist['rating']);
// console.log(myPlaylist['tracks']);
// console.log(myPlaylist['trackCount']);

// ---------Вчуся викликати значення властивості через змінну з обєкта-----------------------------------

// const propertyName = 'tracks';
// const propertyName1 = 'name';
// const propertyName2 = 'rating';
// const propertyName3 = 'trackCount';

// console.log(propertyName);
// console.log(myPlaylist[propertyName]);
// console.log(myPlaylist[propertyName1]);
// console.log(myPlaylist[propertyName2]);
// console.log(myPlaylist[propertyName3]);

// / МОЯ ПРАКТИКА ---------КОРОТКА ЗАПИС ВЛАСТИВОСТЕЙ-------------------------------------------------------

const username = 'Tania';
const email = 'tania777777@mail.com';

// const signupData = {
//   username: username,
//   email: email,
// };

// Код зверху це те самме що код знизу-------------------------------------------------

const signupData = {
  username,
  email,
}

// console.log(signupData);

// / МОЯ ПРАКТИКА --------ВИРАХОВУВАНІ ВЛАСТИВОСТІ-------------------------------------------------------

// наприклад input ---  <input name="color" value = "tomato">

const inputName = 'колір';
const inputValue = 'будь який колір';

const colorPickerData = {
  [inputName]: 'Колір такий',
  [inputValue]: 'червоний',
}

// console.log(colorPickerData);


// / МОЯ ПРАКТИКА --------ССИЛКОВИЙ ТИП {}==={}    -------------------------------------------------------

const a = {
  x: 10,
  y:7,
}
const b = a;

// console.log(b);

// ------------------------------МАСИВИ І ФУНКЦІЇ ЦЕ ОБЄКТИ--------------------------

const numbers = [1, 3, 6,];

numbers.myName = 'Bohdan';

// console.log(numbers);

const myFunction2 = function () {
  console.log('hello');
}
myFunction2.hello = 'Привіт'
console.dir(myFunction2);
// ------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!------------



// --------------------КОД РЕПЕТИ ----------------------------------------------------
/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   myObject = { a: 7, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

// МОЯ ПРАКТИКА ----------------------------------------------------------------

// const myPractic = { a:6, b:7};
// console.log(myPractic);

// const myFunction = function (myPractic) {
//   myPractic = { a: 6, b: 7 };
//   console.log(myFunction);
// };

// myFunction({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());
/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5;

// playlist.rating = 10;

// console.log(playlist);

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

/*
 * Короткая запись свойств
 */
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);
