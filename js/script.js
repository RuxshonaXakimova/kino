/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let ul = document.querySelector('.promo__interactive-list')
let imgs  = document.querySelectorAll('.promo__adv img')
let promo__genre = document.querySelector('.promo__genre')
let promo__bg = document.querySelector('.promo__bg')

imgs.forEach(img => {
    img.remove()
})

promo__genre.innerHTML = "драма"

promo__bg.style.background = "url(./img/bg.jpg) no-repeat centre / cover"

let ids = []
movies.forEach(movie => {
    ids.push(+movie.ID)
})

reload(movies)
function reload(arr) {
    ul.innerHTML = ""

    for(let item of arr) {
        

        if(ids.includes(+item.ID)){
        let li = document.createElement('li')
        let div_delete = document.createElement('div')
        
        
        li.classList.add('promo__interactive-item')
        
        li.innerHTML = `${ids.indexOf(+item.ID)+1 + ". " + item.Title}`

        div_delete.classList.add('delete')

        ul.append(li)
        li.append(div_delete)

        div_delete.onclick = () => {
            li.remove()
            ids = ids.filter(id => id !== +item.ID)
            reload(movies)
        }
        }
        

        

        // li.onclick = () => {
            
        // }

    }
}
