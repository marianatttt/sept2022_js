// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('value');
console.log(x)
if ( x !== 0) {
    console.log('true')
} else {
    console.log('false')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('quarter');
if (time >=0 && time < 15) {
    console.log('first');
} else if (time >=15 && time <30) {
    console.log('second');
} else if (time >=30 && time <45) {
    console.log('third');
} else if (time >=45 && time <59) {
    console.log('fourth')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('decade of the month');
if (day >= 1 && day  <11){
    console.log('first');
}else if (day >= 11 && day <21) {
    console.log('second');
}else if (day >=21 && day <=31) {
    console.log('third')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = prompt('tasks on the week');

switch (week) {
    case 'monday':
        console.log('task1');
        break;
    case 'tuesday':
        console.log('task2');
        break;
    case 'wednesday':
        console.log('task3');
        break;
    case 'thursday':
        console.log('task4');
        break;
    case 'friday':
        console.log('task5');
        break;
    case 'saturday':
        console.log('task6');
        break;
    case 'sunday':
        console.log('task7');
        break;
}



// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


let a = prompt()
let b = prompt()
if (a === b) {
 console.log('number equal')
} else if ( a > b) {
 console.log('b max')
}  else if ( a < b) {
 console.log('a max')
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = prompt() || 'default';
console.log(x)
