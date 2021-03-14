let data = [
    {image: './images/1.webp', name: 'Райя и последний дракон', raiting: '7.7', year: '2021', genre: 'мультфильм'},
    {image: './images/2.webp', name: 'Пара из будущего', raiting: '7.0', year: '2021', genre: 'комедия'},
    {image: './images/3.webp', name: 'Супернова', raiting: '6.4', year: '2020', genre: 'драма'},
    {image: './images/4.webp', name: 'Конек-Горбунек', raiting: '6.1', year: '2021', genre: 'приключения'},
    {image: './images/5.webp', name: 'Бывшая', raiting: '-', year: '2021', genre: 'ужасы'},
    {image: './images/6.webp', name: 'Том и Джерри', raiting: '5.8', year: '2021', genre: 'комедия'},
]

let container = document.getElementById('container')

for (let item of data) {
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    container.append(box)

    let img = document.createElement('img')
    img.setAttribute('class', 'image')
    img.setAttribute('src', item.image)
    box.append(img)

    let name = document.createElement('h2')
    name.setAttribute('class', 'title')
    name.innerHTML = item.name
    box.append(name)

    let raiting = document.createElement('p')
    raiting.setAttribute('class', 'raiting')
    raiting.innerHTML = item.raiting
    box.append(raiting)

    let year = document.createElement('p')
    year.setAttribute('class', 'year')
    year.innerHTML = item.year
    box.append(year)

    let genre = document.createElement('p')
    genre.setAttribute('class', 'genre')
    genre.innerHTML = item.genre
    box.append(genre)
}