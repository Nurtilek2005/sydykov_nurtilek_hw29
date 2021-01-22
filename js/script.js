/* ----------Задание №1---------- */

// let Circle = {
//   radius: 0,
//   setRadius(num) {
//     if(isNaN(num) || num === ''){
//       return 'Введите правильное значение!'
//     } else if(num === null) {
//       return 'Вы отменили ввод.'
//     } else if(num > 0) {
//       this.radius = num;
//       return num;
//     }
//   },
//   square() {
//     return Math.round( Math.PI * Math.pow(this.radius, 2) );
//   },
//   length() {
//     return Math.round( 2 * Math.PI * this.radius );
//   }
// };

// Circle.setRadius(prompt('Введите любой радиус больше нуля'));
// let square = Circle.square();
// let length = Circle.length();

// console.log(square, length);

/* ----------Задание №2---------- */
// let Elevator = {
//   floor: 1,
//   printFloor() {
//     console.log('Elevator is on the floor ' + this.floor);
//   },
//   upOneFloor() {
//     if(this.floor < 16) {
//       this.floor++;
//       this.printFloor();
//     } else {
//       console.log('Выше нельзя');
//     }
//   },
//   downOneFloor() {
//     if(this.floor > 1) {
//       this.floor--;
//       this.printFloor();
//     } else {
//       console.log('Ниже нельзя');
//     }
//   },
//   toFloor(num) {}
// };
// Elevator.upOneFloor();
// Elevator.downOneFloor();

/* ----------Задание №3---------- */
// let initialList = [
//   'John',
//   'Jack',
//   'Harry',
//   'Merry',
//   'Sam',
//   'Violet',
//   'Jimmy'
// ];
// let called = [];
// let notCalled = [];
// let Host = {
//   setGuestList(initialList) {
//     let chance = function (min, max){
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     for(let guest of initialList) {
//       if(chance(1, 100) <= 20){
//         called.push(guest);
//       } else {
//         notCalled.push(guest)
//       }
//     }

//     console.log(`В списке было: ${initialList.length} имен.\nПосле сортировки, осталось ${called.length} имени.\nГости которые приглашены на вечеринку: ${called}\nГости которые не приглашены на вечеринку: ${notCalled}`);
//   }
// };
// Host.setGuestList(initialList);
// console.log(called)