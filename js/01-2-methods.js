
// МОЯ ПРАКТИКА ----------------------------------------------------------------


// МОЯ ПРАКТИКА ---------Фукнції в обєкті-------------------------------------------------------

// const myPlaylist = {
//   name: 'Bohdan Antoshkiv',
//   rating: 10,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   getName: function () {
//     // console.log('це функція гетнейм');
//   },
//   getName() {
//     // console.log('це функція гетнейм');
//   },
// };
// myPlaylist.getName()
// // console.log(myPlaylist);
  


// ---------Фукнції в обєкті ЩЕ ОДИН ПРИКЛАД-----------------

// const myPlaylist = {
//   name: 'Bohdan Antoshkiv',
//   rating: 10,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   changeName(newName) {
//     console.log('this всередині ФУНКЦІЇ  ', this);
    
//     this.name = newName;
//   },
// };

// myPlaylist.changeName('Нове імя ')

// console.log(myPlaylist);

// ---------Фукнції в обєкті ЩЕ ОДИН ПРИКЛАД ДОБАВЛЯЄМО ТРЕК-----------------
// const myPlaylist = {
//   name: 'Bohdan Antoshkiv',
//   rating: 10,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   changeName(newName) {
//     // console.log('this всередині ФУНКЦІЇ  ', this);
    
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track)
//   }
// };

// myPlaylist.changeName('Antoshkiv Bohdan new ')

// myPlaylist.addTrack('імя мого нового треку')

// console.log(myPlaylist);

// ---------Фукнції в обєкті ЩЕ ОДИН ПРИКЛАД Оновлюємо рейтинг-----------------
// const myPlaylist = {
//   name: 'Bohdan Antoshkiv',
//   rating: 10,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   changeName(newName) {
//     // console.log('this всередині ФУНКЦІЇ  ', this);
    
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track)
//     this.trackCount = this.tracks.length
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   }
// };

// myPlaylist.changeName('Antoshkiv Bohdan new ')

// myPlaylist.addTrack('імя мого нового треку')
// myPlaylist.addTrack('імя мого нового треку2');
// myPlaylist.addTrack('імя мого нового треку3');

// myPlaylist.updateRating(8)

// console.log(myPlaylist);


// --------------------КОД РЕПЕТИ ----------------------------------------------------
/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   changeName(newName) {
//     console.log('this внутри changeName: ', this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('Новое имя');

// playlist.addTrack('новый трек 1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('новый трек 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);

// console.log(playlist);
