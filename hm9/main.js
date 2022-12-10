// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];




// for (const simpson of simpsons) {
//    let infoDiv = document.createElement('div')
//     infoDiv.classList.add('member')
//
//     let infoh2 = document.createElement('h2')
//     infoh2.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`
//
//     let infop = document.createElement('p')
//     infop.innerText = `${simpson.info}`
//
//     let infoPhoto = document.createElement('img')
//     infoPhoto.src = simpson.photo
//
//     infoDiv.append(infoh2, infop, infoPhoto)
//     document.body.appendChild(infoDiv)
//
// }

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//
//
// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
//
// for (const value of coursesArray) {
//
//     let div = document.createElement('div')
//
//     let tittle = document.createElement('div')
//     tittle.innerText = `${value.title}`
//
//     let monthDuration = document.createElement('div')
//     monthDuration.innerText = `${value.monthDuration}`
//
//     let hourDuration = document.createElement('div')
//     hourDuration.innerText = `${value.hourDuration}`
//
//     let ul = document.createElement('ul')
//
//     for (const module of value.modules) {
//         let li = document.createElement('li')
//         li.innerText = `${module}`
//
//         document.body.append(div)
//         div.append(tittle, monthDuration, hourDuration, ul)
//         ul.append(li)
//     }
// }
//


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

//     let div = document.createElement('div')
//
// div.innerText = 'okten'
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// div.style.background ='red'
// div.style.color = 'silver'
// div.style.fontSize = '20px'
// document.body.append(div)
// document.body.append(div.cloneNode(true))


// - Є масив:

//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let array = ['Main','Products','About us','Contacts']
//
// let ul = document.querySelector('.menu')
//
// for (const ulElement of array) {
//     let li = document.createElement('li')
//     li.innerText = `${ulElement}`
//     ul.append(li)
// }



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// for (const value of coursesArray) {
//     let div = document.createElement('div')
//
//     let title = document.createElement('div')
//     title.innerText = `${value.title}`
//
//     let monthDuration = document.createElement('div')
//     monthDuration.innerText = `${value.monthDuration}`
//
//     div.append(title,monthDuration)
//     document.body.appendChild(div)
// }


// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// for (const value of coursesArray) {
//     let div = document.createElement('div')
//     div.classList.add('item')
//     document.body.append(div)
//
//     let title = document.createElement('h1')
//     title.classList.add ('heading')
//     title.innerText = `${value.title}`
//
//     let monthDuration = document.createElement('p')
//     monthDuration.classList.add ('description')
//     monthDuration.innerText = `${value.monthDuration}`
//
//     div.append(title,monthDuration)
// }


//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// div = document.createElement('div')
//
// div.setAttribute('id', 'text')
// div.innerText ='hi'
// document.body.append(div)
//
// let button = document.createElement('button')
// button.innerText ='go'
// document.body.append(button)
// button.onclick = function () {
//     div.style.display = 'none'
// }

//

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button = document.createElement('button')
// let input = document.createElement('input')
// button.innerText='how age'
//
// button.onclick = function () {
//     input.onclick
//     if (input.value >= 18) {
//         alert ('your age okay')
//     } else if (input.value < 18) {
//         alert('your age is less than 18')
//     } else if (input.value !== number ) {
//         alert ('error')
//     }
// document.body.append(button, input)
// }



// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


let input1 = document.createElement('input')
let input2 = document.createElement('input')
let input3 = document.createElement('input')

let button = document.createElement('button')
button.innerText = 'click'

document.body.append(input1, input2, input3, button)

button.onclick = () => {
    let tr = input1.value;
    let td = input2.value;
    let c = input3.value;


    const accept = (one, two, three) => {
        let info = document.createElement('table')
        info.style.border = '1px solid black'
        document.body.append(info)

        for (let i = 0; i < one; i++) {
            let infoElement1 = document.createElement('tr')
            info.append(infoElement1)

            for (let j = 0; j < two; j++) {
                let infoElement2 = document.createElement('td');
                infoElement2.innerText = `${three}`
                infoElement2.style.border = '1px solid black'
                infoElement1.append(infoElement2)
            }
        }

    }
    accept(tr, td, c)
}


