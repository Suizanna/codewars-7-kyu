/* Задача 1.
Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, вы должны вернуть 0
*/
// console.log('Задача 1: ');

const numbers = [1, 2, 7, -2];

function sum (numbers) {
    return numbers.reduce((total, num) => total += num, 0)
  };
  console.log(sum(numbers));

// 2 вар.
  function sum (numbers) {
    let sum = 0;
    numbers.forEach(num => {sum+=num})
    return sum 
  };
console.log(sum(numbers));  // return 8


/* Задача 2.
В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее числа.
*/
// console.log('Задача 2: ');

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

console.log('high & low numbers: ',  highAndLow("1 2 3 4 5"));  

 // 2 вар.
  function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return Math.max.apply(null, numbers) + ' ' + Math.min.apply(null, numbers);
  }

  console.log('high & low numbers: ',  highAndLow("1 2 3 4 5"));  // return "5 1"
  console.log('high & low numbers: ',  highAndLow("1 2 -3 4 5"));  // return "5 -3"

  
/* Задача 3.
Учитывая непустой массив целых чисел, верните результат умножения значений вместе по порядку. Пример:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
  console.log('Задача 3: ');
  
function grow(x){
  return x.reduce((total, el) => total * el ,1)
}
console.log('grow([1, 2, 3, 4]): ', grow([1, 2, 3, 4]));

// стрелка
const growX = x => x.reduce((acc,el) => acc*=el)
console.log('growX : ', growX([1, 2, 3, 4]) );

// 2 вар.
function grow2(x){
  let total = x[0];
  x.forEach((el) => total *= el)
  return total;
}
console.log('grow 2: ', grow2([1, 2, 3, 4])); 

// 3 вар.
const grow3 = x => {
  let res = x[0];
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};
console.log('grow 3: ', grow3([1, 2, 3, 4])); // return 24

