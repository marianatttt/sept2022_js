// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr;
arr = [23,12, 67, 3, 89, 77, 34, 23, 56, 22];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let book1 = {title: 'Think and be rich', pageCount: 346, genre: 'psychology'}
console.log(book1)

let book2 = {title: 'God travels incognito', pageCount: 289, genre: 'psychology'}
console.log(book2)

let book3 = {title: 'The plane without her', pageCount: 570, genre: 'modernProse'}
console.log(book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let book4 = {title: 'Source', pageCount: 700, genre: 'modernProse', authors: [{name: 'Ayn Rand', age: 87}]}
console.log(book4)

let book5 = {title: 'Choice', pageCount: 412, genre: 'psychology', authors: [{name: 'Edith Egger', age: 87}]}
console.log(book5)

let book6 = {title: 'Red pill', pageCount: 285, genre: 'psychology', authors: [{name: 'Andriy Kurpatov', age: 67}]}
console.log(book6)



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'andriy', username: 'pavlov', password: 4567},
    {name: 'andriy', username: 'pavlov', password: 3457},
    {name: 'andriy', username: 'pavlov', password: 1234},
    {name: 'andriy', username: 'pavlov', password: 6890},
    {name: 'andriy', username: 'pavlov', password: 3467},
    {name: 'andriy', username: 'pavlov', password: 1234},
    {name: 'andriy', username: 'pavlov', password: 4567},
    {name: 'andriy', username: 'pavlov', password: 9831},
    {name: 'andriy', username: 'pavlov', password: 8384},
    {name: 'andriy', username: 'pavlov', password: 1267},
]
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


