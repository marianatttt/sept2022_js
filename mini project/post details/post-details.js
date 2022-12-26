// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)



let url = new URL (location.href)
let id = url.searchParams.get('id')


fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then (value => {

        const container2 = document.createElement('div')
        container2.classList.add('container2')

        const inf = document.createElement('div')
        inf.classList.add('box')

        for (const item in value) {
            const li = document.createElement('ul')
            li.innerText = `${item} : ${value[item]}`
            inf.appendChild(li)
        }

        container2.appendChild(inf)
        document.body.appendChild(container2)

        const button = document.createElement('button')
        button.innerText = 'Coments'
        button.classList.add('box4')

        document.body.appendChild(button)

        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`)
                .then(resp => resp.json())
                .then(valuee => {

                    const inf = document.createElement('div')
                        inf.classList.add('box8')
                        for (const item of valuee) {
                            let div = document.createElement('div')
                            div.classList.add('box7')
                            div.innerText = ` ${item.body}`
                            inf.appendChild(div)
                            document.body.appendChild(inf)
                        }
                    button.disabled= 'true'
                    }

                )
        }
    } )



