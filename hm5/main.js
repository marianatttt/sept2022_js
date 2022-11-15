// // // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// //
// function calc(a, b) {
//     return a * b;
// }
// let s = calc(20, 10)
// console.log(s)
// //
// // // - створити функцію яка обчислює та повертає площу кола з радіусом r
// //
// function calc(r) {
//     return 3.14 * r * r;
// }
// let r = calc (10)
// console.log(r)
// //
// // // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// //
// function calc(h, r) {
//     return 2 * 3.14 * r * (r + h);
// }
// let s = calc (10, 10)
// console.log(s)
// //
// // // - створити функцію яка приймає масив та виводить кожен його елемент
// //
// function array (list) {
//     for (const item of list) {
//         console.log(item)
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true}
// ]
// array(users);
//
// // // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// //
// function txt() {
//     document.write(`<p>${arguments[0]}</p>`);
//
// }
// txt ('hello')
//
// // // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function asd (text) {
//     document.write(`
// <ul>
//  <li>${text}</li>
//  <li>${text}</li>
//  <li>${text}</li>
// </ul>
// `)
// }
// asd ('lorem');
// //
// //
// // // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// //
function elem (text, count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write (`<li>  ${text}  </li> 
        `)
    }
    document.write(`</ul>`)
}
elem('lorem', '5')
//
// //
// // // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список//
// //
function elem (array) {
    document.write(`<ul>`)
    for (const inform of array) {
        document.write (`<li>${inform}</li>`)}
    document.write(`</ul>`)
    }

let asd = [23, 78, false, 'lorem']
 elem(asd)
// //
// // // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// //
// function array (list) {
//     for (const inform of list) {
//         document.write(`<div>${inform.name} ${inform.age} ${inform.status}</div>`)}
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true}
// ]
// array (users)
// //
// //
// //
// // // - створити функцію яка повертає найменьше число з масиву
// //
// let funMin = (arr) => {
//     let min = arr[0];
// for (let number of arr) {
//     if (number < min) min = number
// }
// return min
// }
// let a = funMin ([34, 2, 56, 99]);
// console.log(a)
// //
// // // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


 let count = (array) => {
    let i = 0;
    for (const elem of array) {
        i += elem;
    }
    return i;
};

let sum = count ([10,20,70])
console.log(sum);