let input = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click', () => {
    let film = input.value
    input.value = ''
    getFilms(film)
})

function getFilms(film) {
    fetch(`https://www.omdbapi.com/?s=${film}&apikey=f6e256e1`)
        .then(response => response.json())
        .then(titles => {
            let divFilm = document.querySelector('#films')
            titles.Search.forEach(title => {
                let div = document.createElement('div')
                div.className = 'card overflow-auto grid col-5 '
                div.innerHTML = `<img src="${title.Poster}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">${title.Title}</h5>
                                    <p class="card-text">${title.Year}</p>
                                    <a href="#" class="btn btn-primary">Lire plus...</a>
                                    </div>`
                divFilm.appendChild(div)
                console.log(titles)

            })
        })
}


