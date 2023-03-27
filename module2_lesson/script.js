/* Задание 1 */

const countNumInArray = (obj) => {
  const filterObj = obj.filter(
    (elem) => typeof elem === "number" && !isNaN(+elem)
  );

  const even = filterObj.filter((elem) => elem % 2 === 0 && elem !== 0).length;
  const odd =
    filterObj.indexOf(0) !== -1
      ? filterObj.length - even - 1
      : filterObj.length - even;

  console.log(
    `Четных чисел в массиве - ${even}. Нечетных - ${odd}. ${
      filterObj.indexOf(0) !== -1 ? "В массиве есть ноль" : "В массиве нет нуля"
    }`
  );
};

document.querySelector(".lesson-1").addEventListener("click", () => {
  countNumInArray([2, "2", 3, 0, 1, 50, 2, undefined, NaN]);
});

/* document.querySelector('.lesson-1').addEventListener('click', () => {
    const value = prompt('Введите значене', '');

    if (typeof +value === 'number' && !isNaN(+value) && +value != 0)
        console.log(+value % 2 === 0 ? 'чётное' : 'нечётное')
    else
        console.log('Упс, кажется, вы ошиблись')
}) */

/* Задание 2 */

/* проверить '  ' */
const isPrime = (num) => {
  if (num > 1000 || typeof num !== "number" || isNaN(+num) || num < 0)
    return "Данные не верны";

  for (var i = 2; i <= Math.sqrt(num); ) {
    if (num % i == 0) return "Не является простым числом";
    i == 2 ? i++ : (i += 2);
  }
  return num > 1 ? "Простое число" : "Не является простым числом";
};

document.querySelector(".lesson-2").addEventListener("click", () => {
  console.log(isPrime(73));
});

/* Задание 3 */

const sumNum = (num) => {
  return (number) => num + number;
};

document.querySelector(".lesson-3").addEventListener("click", () => {
  console.log(sumNum(3)(2));
});

/* Задание 4 */

const printNumber = (a, b) => {
  setInterval(() => {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  }, 1000);
};

document.querySelector(".lesson-4").addEventListener("click", () => {
  printNumber(1, 10);
});

/* Задание 5 */

document.querySelector(".lesson-5").addEventListener("click", () => {
  const obj = ["Первый", 2, true];

  console.log(obj.length);
  for (const elem of obj) {
    console.log(elem);
  }
});

/* Задание 6 */

document.querySelector(".lesson-6").addEventListener("click", () => {
  const obj = [2, "2"];

  console.log(new Set(obj).size > 1 ? false : true);
});

/* Задание 7 */

/* Задание 8 */

document.querySelector(".lesson-8").addEventListener("click", () => {
  const obj = new Map([
    ["Первый", "test"],
    [2, true],
    ["3", "Последний"],
  ]);

  for (const [key, elem] of obj) {
    console.log(`Ключ — ${key}, значение — ${elem}`);
  }
});
