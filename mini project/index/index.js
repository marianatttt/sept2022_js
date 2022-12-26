// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули




fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {

        const container = document.createElement('div')
        container.classList.add('container')
        const container1 = document.createElement('div')
        container1.classList.add('container1')

        for ( const user of users) {
            const div = document.createElement('div')
            div.classList.add('box')

            const p = document.createElement('h3')
            p.innerText =`${user.id} ${user.name}`


            const a = document.createElement('a')
            a.href = `../user details/user-details.html?id=${user.id}`
            a.innerText = 'more information'

            const button = document.createElement('button');

            const inf = document.createElement('div')
            inf.classList.add ('box1')

            button.appendChild(a)
            inf.appendChild(button)
            div.append(p, inf)
            container.appendChild(div)
            container1.appendChild(container)
            document.body.append(container1)
        }
    })

