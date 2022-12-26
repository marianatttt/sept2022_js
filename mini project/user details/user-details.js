// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

let url = new URL (location.href)
let id = url.searchParams.get('id')

fetch (`https://jsonplaceholder.typicode.com/users/${id}/`)
    .then(resp => resp.json())
    .then (value => {

        const container2 = document.createElement('div')
            container2.classList.add('container2')

        const info = document.createElement('div')
            info.classList.add('box')

            function explorer(element) {
                for (const value in element) {
                    if (typeof element[value] !== 'object') {
                        const div = document.createElement('div')
                        div.classList.add('box3')
                        div.innerText = (`${value} : ${element[value]}`)
                        info.append(div)
                    } else {
                        explorer(element[value])
                    }
                }
            }

            explorer(value)

            container2.appendChild(info)
            document.body.appendChild(container2)

            const button = document.createElement('button');
            button.innerText = 'Post of current user'
            document.body.append(button)
            button.classList.add('box4')


            button.onclick  = function () {

                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then(resp => resp.json())
                    .then(posts => {

                        const box6 = document.createElement('div')
                            box6.classList.add('box6')

                            for (const post of posts) {
                                const a = document.createElement('a')
                                const div = document.createElement('div')
                                div.classList.add('box5')
                                const p = document.createElement('p')
                                a.innerText = post.title
                                a.href = `../post details/post-details.html?id=${post.id}`

                                a.appendChild(p)
                                div.append(a, p)
                                box6.appendChild(div)
                                document.body.appendChild(box6)
                            }
                        button.disabled= 'true'
                        }
                    )
            }
        }
    )






