/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

import {
    movies
} from './db.js'

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
let imgs = document.querySelectorAll('.promo__adv img')
let promo_genre = document.querySelector('.promo__genre')

let promo_title = document.querySelector('.promo__title')
let promo_descr = document.querySelector('.promo__descr')
let promo_ratings_span = document.querySelector('.promo__ratings span')
let promo_ratings_stars = document.querySelector('.promo__ratings .stars')

let promo_bg = document.querySelector('.promo__bg')
let inp_search = document.querySelector('#search')
let promo_menu_list = document.querySelector('.promo__menu-list')
let promo_menu_list_ul = document.querySelector('.promo__menu-list ul')
let promo__ratings_img = document.querySelector('.promo__ratings img')
imgs.forEach(img => {
    img.remove()
})



let ids = []
movies.forEach(item => {
    ids.push(+item.ID)
})
show_first(movies)

function show_first(arr) {
    promo_bg.style.background = `url('${arr[0].Poster}') center top / cover no-repeat`
    promo_genre.innerHTML = arr[0].Genre
    promo_title.innerHTML = arr[0].Title
    promo_descr.innerHTML = arr[0].Plot
    promo_ratings_span.innerHTML = arr[0].imdbRating
    promo__ratings_img.src = "./img/seven.png"
}

let liss = []



// function numbering(arr) {
//     for(let li of arr){
//         let last_name = li.innerHTML
//         li.innerHTML = `${arr.indexOf(li) + 1 + ". " + last_name}`
        
//     }
// }

// function numbering(num) {
//     num+1
//     return num
// }

function numbering(li) {
    let a  = 0
    
}
reload_li(movies)

function reload_li(arr) {
    let a = 0

    ul.innerHTML = ""



    for (let item of arr) {


        if (ids.includes(+item.ID)) {
            let li = document.createElement('li')
            let div_delete = document.createElement('div')


            li.classList.add('promo__interactive-item')
            a++
            // numbering(a)

            li.innerHTML = `${a + ". " + item.Title}`
            // li.innerHTML = item.Title
            // liss.push(li)
            
            

            div_delete.classList.add('delete')

            ul.append(li)
            li.append(div_delete)

            li.onclick = () => {
                promo_bg.style.background = `url('${item.Poster}') center top / cover no-repeat`
                promo_genre.innerHTML = item.Genre
                promo_title.innerHTML = item.Title
                promo_descr.innerHTML = item.Plot
                promo_ratings_span.innerHTML = item.imdbRating
                if(+item.Metascore  >=70 && +item.imdbRating <=80 ){
                    promo__ratings_img.src = "./img/seven.png"
                } else if(+item.Metascore <=70){
                    promo__ratings_img.src = "./img/six.png"
                } else if(+item.Metascore >=80 && +item.imdbRating <=90){
                    promo__ratings_img.src = "./img/eight.png"
                }

                
                

            }


            div_delete.onclick = () => {
                li.remove()
                ids = ids.filter(id => id !== +item.ID)
                reload_li(movies)
            }
        }

        



    }

    // numbering(liss)
    // liss.splice(0)
}

let genres = movies.map(item => item.Genre)

genres = ['All', ...new Set(genres)]
let as = []
genre_promo_menu(genres)

function genre_promo_menu(arr) {
    promo_menu_list_ul.innerHTML = ''
    for (let item of arr) {
        let li = document.createElement('li')
        let a = document.createElement('a')



        li.classList.add('promo__menu-item')
        a.classList.add('promo__menu-item')
        // a.classList.add('promo__menu-item_active')
        a.href = "#"
        a.innerHTML = item
        as.push(a)


        promo_menu_list_ul.append(li)
        li.append(a)



        a.onclick = () => {
            as.forEach(a => {
                a.classList.remove('promo__menu-item_active')
            })

            a.classList.add('promo__menu-item_active')
            let choised_genre  
            if(a.innerHTML == "All"){
                choised_genre = movies
            } else{
                choised_genre = movies.filter(movie => movie.Genre == a.innerHTML)
            }
            
            reload_li(choised_genre)
            show_first(choised_genre)
        }
    }

}





inp_search.onkeyup = () => {
    let val = inp_search.value.toLowerCase().trim()

    let filtered = movies.filter(item => {
        let title = item.Title.toLowerCase().trim()

        if (title.includes(val)) {
            return item
        }
    })

    reload(filtered)
}





// function reload(arr) {
//     ul.innerHTML = ""

//     changeMovie(arr[0])

//     for (let item of arr) {
//         let li = document.createElement('li')
//         let del = document.createElement('div')


//         li.classList.add('promo__interactive-item')
//         del.classList.add('delete')


//         li.innerHTML = item.Title

//         li.append(del)
//         ul.append(li)

//         li.onclick = () => {
//             changeMovie(item)
//         }
//     }
// }



// function changeMovie(item) {
//     promo_bg.style.backgroundImage = `url(${item.Poster})`
//     promo_genre.innerHTML = item.Genre
//     promo_title.innerHTML = item.Title
//     promo_descr.innerHTML = item.Plot
//     promo_ratings_span.innerHTML = item.imdbRating
// }






