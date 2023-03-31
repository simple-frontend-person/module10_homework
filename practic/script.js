/*  1. Операторы, значения, переменные */
/* Задание 1 */

document.querySelector(".lesson-1").addEventListener("click", () => {
  const name = prompt("Какое у вас имя", "")
  const surname = prompt("Какая у вас фамилия", "");

  alert(`Привет, ${name} ${surname}!`)
});

/* Задание 2 */

document.querySelector(".lesson-2").addEventListener("click", () => {
  const temp = prompt('Какое количество градусов по Цельсию', "");

  const result = (+temp * 9 / 5) + 32;
  alert(`${temp} градусов по Цельсию равны ${result} градусам по Фаренгейту`)
});

/* Задание 3 */

document.querySelector(".lesson-3").addEventListener("click", () => {
  const x = prompt("Введите X", "");

  const y = (4 * Math.pow(+x, 2) + 18 - 23 * +x) / ((5 / 9) * +x + 18 * ((Math.pow(+x, 3) / 33) * x)) + +x * (15 / 12);

  alert(y)
});

/* Задание 4 */

document.querySelector(".lesson-4").addEventListener("click", () => {
  a = 12;
  b = 'number';
  c = false;
  d = null;
  e = undefined;
  f = 123.34;
  g = '1' + 1;
  h = 15 / 0;
  i = -'5';
  j = 5 == '5'

  at = typeof a === 'number'; // true
  bt = typeof b === 'string'; // false, а нужно чтобы все были true
  ct = typeof c === 'boolean';
  dt = typeof d === 'object';
  et = typeof e === 'undefined';
  ft = typeof f === 'number';
  gt = typeof g === 'string';
  ht = typeof h === 'number';
  it = typeof i === 'number';
  jt = typeof j === 'boolean';

  alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);
});

/* Задание 5 */

document.querySelector(".lesson-5").addEventListener("click", () => {
  const NDS = 0.20
  const NDFL = 0.13
  const EXCISE = 0.1
  const RENT = 40000
  const FOOD = 15000
  const OTHER = 15000
  const MY_SALARY = 120000

  const ndflTax = MY_SALARY * NDFL;
  const mySalaryNet = MY_SALARY - ndflTax;
  const otherTaxes = mySalaryNet * (NDS + EXCISE);
  let totalAvailable = mySalaryNet - otherTaxes;
  totalAvailable -= FOOD + OTHER + RENT
  alert('Зарплата ' + MY_SALARY + ' рублей')
  alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
  alert('Осталось ' + totalAvailable + ' рублей')
});

/* 2. Условия */

/* Задания 1 */

document.querySelector('.lesson-6').addEventListener('click', () => {
  const legA = prompt('Катет A', '');
  const legB = prompt('Катет B', '');
  const hypotenuseС = prompt('Гипотенуза C', '');

  alert(Math.pow(+hypotenuseС, 2) === Math.pow(+legA, 2) + Math.pow(+legB, 2) ? 'Это прямоугольный треугольник!' : 'Это не прямоугольный треугольник!')
})

/* Задание 2 */

document.querySelector('.lesson-7').addEventListener('click', () => {
  const firstNum = prompt("Введите первое число", ""),
    secondNum = prompt("Введите второе число", ""),
    thirdNum = prompt("Введите третье число", "");

  alert(Math.max(firstNum, secondNum, thirdNum))
})

/* Задание 3 */

document.querySelector('.lesson-8').addEventListener('click', () => {
  const num = prompt('Введите число', "");

  alert(num % 2 === 0 ? `Число ${num} четное!` : `Число ${num} нечетное!`)
})