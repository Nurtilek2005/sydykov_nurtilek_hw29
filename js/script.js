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
let initialList = [
  'John',
  'Jack',
  'Harry',
  'Merry',
  'Sam',
  'Violet',
  'Jimmy'
];
let called = [``];
let notCalled = [``];
let Host = {
  setGuestList(initialList) {
    for(let guest in initialList) {
      let chance = Math.floor( Math.random() * (80 - 1));
      if(chance <= 20) {
        called += initialList[guest];
      } else {
        notCalled += initialList[guest];
      }
    }
  },
  guestList(called) {
    for(let calls in called) {
      return `В списке было ${initialList.length} имён.\nПосле сортировки осталось ${calls}`;
    }
  }
};
Host.setGuestList(initialList);
console.log(Host.guestList(called));