/* Задание 1 */

document.querySelector('.lesson-1').addEventListener('click', () => {
    const value = prompt('Введите значене', '');

    if (typeof +value === 'number' && !isNaN(+elem))
        console.log(+value % 2 === 0 ? 'чётное' : 'нечётное')
    else
        console.log('Упс, кажется, вы ошиблись')
})

/* Задание 2 */

document.querySelector('.lesson-2').addEventListener('click', () => {
    const x = 10;

    switch (typeof x) {
        case 'number':
            console.log(`x — число`)
            break;
        case 'string':
            console.log(`x — строка`)
            break;
        case 'boolean':
            console.log(`x — логический тип`)
            break;
        default:
            console.log(`Тип x не определён`)
            break;
    }
})

/* Задание 3 */

document.querySelector('.lesson-3').addEventListener('click', () => {
    const string = 'Hello';
    console.log(Array.from(string).reverse().join(''))
})

/* Задание 4 */

document.querySelector('.lesson-4').addEventListener('click', () => {
    console.log(Math.floor(Math.random() * 101))
})

/* Задание 5 */

document.querySelector('.lesson-5').addEventListener('click', () => {
    const obj = ['Первый', 2, true];

    console.log(obj.length);
    for (const elem of obj) {
        console.log(elem)
    }
})

/* Задание 6 */

document.querySelector('.lesson-6').addEventListener('click', () => {
    const obj = [2, "2"]

    console.log(new Set(obj).size > 1 ? false : true)
})

/* Задание 7 */

document.querySelector('.lesson-7').addEventListener('click', () => {
    const obj = [2, "2", 3, 0, 1, 50, 2, undefined, NaN];

    const filterObj = obj.filter(elem => typeof elem === 'number' && !isNaN(+elem));

    const even = filterObj.filter(elem => elem % 2 === 0 && elem !== 0).length;
    const odd = filterObj.indexOf(0) !== -1 ? filterObj.length - even - 1 : filterObj.length - even;

    console.log(`Четных чисел в массиве - ${even}. Нечетных - ${odd}. ${filterObj.indexOf(0) !== -1 ? 'В массиве есть ноль' : 'В массиве нет нуля'}`)
})

/* Задание 8 */

document.querySelector('.lesson-8').addEventListener('click', () => {
    const obj = new Map([
        ['Первый', 'test'],
        [2, true],
        ['3', 'Последний']
    ]);

    for(const [key, elem] of obj){
        console.log(`Ключ — ${key}, значение — ${elem}`)
    }
})
