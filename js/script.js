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
// let eggsCount = prompt('Сколько яиц нужно сварить');
// let time = 0;
// let zakaz = function (eggsCount, time) {
//   if(eggsCount > 0) {
//     for(let i = 0; i < Math.ceil(eggsCount / 8); i++) {
//       if(eggsCount > 0) {
//         time += 5;
//       }
//     }
//   }
//   if(eggsCount === null) {
//     return 'Вы отменили ввод.'
//   }
//   if(isNaN(eggsCount) || eggsCount === '') {
//     return 'Введите корректные данные';
//   } else {
//     return `Для варки ${eggsCount} яиц нужно ${time} минут`;
//   }

// }
// let result = zakaz(eggsCount, time);

// console.log(result);


/* ----------Задание №3---------- */
// let odd = [0];
// let even = [0];
// let getEvenSum = function (...arguments) {
//   for (let nums in arguments) {
//     arguments[nums] / 2
//   }
// }

// let result = getEvenSum(4, 3, 1, 2, 5, 10, 6, 7, 8);
// console.log(result);

/* ----------Задание №4---------- */
// let checkExam = function (reshenie, otvet) {
//   if(reshenie === '' || otvet === '') {
//     return 'Введите корректные данные';
//   } else {
//     for(let i = 0; i < reshenie.length + otvet.length; i++) {
//       console.log( `Текущий результат ${otvet}`);
//     }
//   }
// }

// let result = checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
// console.log(result);