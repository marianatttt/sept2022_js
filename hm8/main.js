// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname= surname;
    this.email = email;
    this.phone = phone;
}
user1 = new User (1, 'vasya', 'kokos', 'wasyakokos', 123)
user2 = new User (10, 'kolya', 'kokos', 'kolyaokos', 124)
user3 = new User (3, 'max', 'kokos', 'maxkokos', 125)
user4 = new User (4, 'olya', 'kokos', 'olykokos', 126)
user5 = new User (5, 'lybov', 'kokos', 'lybovkokos', 127)
user6 = new User (6, 'katya', 'kokos', 'katyakokos', 128)
user7 = new User (7, 'vasya', 'kokos', 'wasyakokos', 129)
user8 = new User (8, 'andrij', 'kokos', 'andrijkokos', 130)
user9 = new User (9, 'sofi', 'kokos', 'sofikokos', 131)
user10 = new User(2, 'petya', 'kokos', 'petyakokos', 132)


let users = [ user1, user2, user3, user4, user5, user6, user7, user8, user9, user10 ]
console.log(users)



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filerUsers = users.filter(value => value.id % 2 ===0)
console.log(filerUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort((a,b) => {return a.id - b.id});
console.log(sortUsers)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id, name, surname , email, phone, orders) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orders = orders
    }
}
let client1 = new Client (1, 'vasya', 'kokos', 'wasyakokos', 123, ['apples', 'tangerines'])
let client2 = new Client (2, 'kolya', 'kokos', 'kolyaokos', 124, ['warelmelons'])
let client3 = new Client (13, 'max', 'kokos', 'maxkokos', 125, ['lemons'])
let client4 = new Client (4, 'olya', 'kokos', 'olykokos', 126, ['grapes', 'persimmons', 'apples'])
let client5 = new Client (5, 'lybov', 'kokos', 'lybovkokos', 127, ['melons', 'lemons'])
let client6 = new Client (6, 'katya', 'kokos', 'katyakokos', 128, ['orange'])
let client7 = new Client (7, 'vasya', 'kokos', 'wasyakokos', 129, ['avocados', 'lemons'])
let client8 = new Client (8, 'andrij', 'kokos', 'andrijkokos', 130, ['avocados'])
let client9 = new Client (9, 'sofi', 'kokos', 'sofikokos', 131, ['raspberry', 'blackberry'])
let client10 = new Client (10, 'petya', 'kokos', 'petyakokos', 132, ['strawberry', 'bananas'])

let clients = [ client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
console.log(clients)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsSort = clients.sort((a,b) => {return a.orders.length - b.orders.length});
console.log(clientsSort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car (model, producer, year , maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year= year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;

//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//     this.info = function (){
//         console.log(`
//         model:${this.model}
//         producer: ${this.producer}
//         year: ${this.year}
//         maxSpeed: ${this.maxSpeed}
//         engineCapacity: ${this.engineCapacity}
//         `)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//          return this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         return this.year = newValue;
//     }
//     this.addDriver = function (drivers) {
//         this.drivers = drivers
//     }
// }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// let cars = new Car ('ddcdg', 'cfff', 2011, 280, 100)
//
// console.log(cars.drive());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// cars.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// console.log(cars.increaseMaxSpeed(56));

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// console.log(cars.changeYear(2022));

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// cars.addDriver({name:'petya', age:34});
// console.log(cars)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість,об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

  class Auto {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity
    }
      drive () {
          return `їдемо зі швидкістю ${this.maxSpeed} на годину`
      }
      info = function (){
          console.log(`
        model:${this.model}
        producer: ${this.producer}
        year: ${this.year}
        maxSpeed: ${this.maxSpeed}
        engineCapacity: ${this.engineCapacity}
        `)
      }
      increaseMaxSpeed = function (newSpeed) {
          return this.maxSpeed += newSpeed;
      }
      changeYear = function (newValue) {
          return this.year = newValue;
      }
      addDriver = function (drivers) {
          this.drivers = drivers
      }
  }

let auto = new Auto ('ddcdg', 'cfff', 2011, 280, 100)
console.log(auto)
console.log(auto.drive())
auto.info()
console.log(auto.increaseMaxSpeed(50))
console.log(auto.changeYear(2021))
auto.addDriver({name:'marry'})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Girl (name, age, footsize) {
    this.name = name;
    this.age = age;
    this.footsize = footsize;

}

let girl1 = new Girl ('any', 27, 36);
let girl2 = new Girl ('mary', 30,37);
let girl3 = new Girl ('christina', 22, 40);
let girl4 = new Girl ('vita', 40, 35);
let girl5 = new Girl ('vira', 21, 39);
let girl6 = new Girl ('mariana', 24, 39);
let girl7 = new Girl ('natalay', 54, 37);
let girl8 = new Girl ('marta', 23, 39);
let girl9 = new Girl ('diana', 18, 35);
let girl10 = new Girl ('alina', 17, 37);

let girls = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10]
// console.log(girls)


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов

class Pcince {
    constructor (name, age, findfoot) {
       this.name = name;
       this.age = age;
       this.findfoot = findfoot;
    }
}

let prince = new Pcince('vasya', 31, 40);

let princefind = (arrayGirls, prince) => {
    for (const gir of arrayGirls) {
        if (gir.footsize === prince.findfoot){
            console.log(`Я знайшов ${gir.name}`);
    }
    }
}
princefind(girls, prince)



//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let girlAndPrince = girls.find(value => value.footsize === prince.findfoot);
console.log(girlAndPrince)