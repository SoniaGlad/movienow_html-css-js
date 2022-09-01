'use strict';

let movies = [
    {
        id: 368539,
        class: 'movie-card',
        poster: "../images/hamilton.jpg",
        title: 'Гамильтон',
        year: 2015,
        directors: [
            "Томас Каил"
        ],
        genres: [
            "Мюзикл"
        ],
        actors: [
            "Лин-Мануэль Миранда",
            "Лесли Одом мл.",
            "Давид Диггс",
            "Филлипа Су",
            "Рене Голдсберри",
            "Окьерете Онаодован",
            "Энтони Рамос",
            "Джонатан Грофф",
            "Кристофер Нил Джексон",
            "Жасмин Сепас Джонс"
        ],
        description: '',
        duration: "",
    },
    {
        id: 39843,
        class: 'movie-card',
        poster: "../images/there-lived-a-dog.jpg",
        title: 'Жил-был пёс',
        year: 1994,
        directors: [
            "Эдуард Назаров"
        ],
        genres: [
            "Мультфильм",
            "Короткометражка",
            "Комедия",
            "Семейный"
        ],
        actors: [
            "Георгий Бурков",
            "Армен Джигарханян",
            "Эдуард Назаров"
        ],
        description: 'Жил-был пёс. Верно служил, но выгнали его по старости. И решил он повеситься, да повстречал в лесу такого же старого волка...',
        duration: "",
    },
    {
        id: 520468,
        class: 'movie-card',
        poster: "../images/shawshank-redemption.jpg",
        title: 'Побег из Шоушенка',
        year: 1994,
        directors: [
            "Томас Каил"
        ],
        genres: [
            "Драма"
        ],
        actors: [
            "Тим Роббинс",
            "Морган Фриман",
            "Боб Гантон",
            "Уильям Сэдлер",
            "Клэнси Браун",
            "Джил Беллоуз",
            "Марк Ролстон",
            "Джеймс Уитмор",
            "Джеффри ДеМанн",
            "Ларри Бранденбург",
            "Диомид Виноградов",
            "Игорь Старосельцев",
            "Никита Прозоровский",
            "Олег Вирозуб",
            "Василий Дахненко"
        ],
        description: '',
        duration: "142 мин. / 02:22",
    },
];

function renderPage(movies) {
    let page = document.querySelector('.page');

    let header = document.createElement('header');
    header.classList.add('header');
    page.append(header);

    let headerInner = `<div class="wrapper">
        <h1 class="header__title">#movienow</h1>
    </div>`;
    header.insertAdjacentHTML('beforeend', headerInner);

    let section = document.createElement('section');
    section.classList.add('main-content');
    page.append(section);

    let sectionInner = document.createElement('div');
    sectionInner.classList.add('wrapper');
    section.append(sectionInner);

    let sectionTitle = `<h3 class="main-content__subtitle">Фильмы</h3>`;
    sectionInner.insertAdjacentHTML('beforeend', sectionTitle);

    let filtersGroup = `
        <div class="filters-group">

            <div class="radio-group__button">
                <input type="radio" id="radio-button_all" class="radio-group__input" name="movie-toggle" value="all"
                       checked>
                <label for="radio-button_all" class="radio-group__label">Все</label>
            </div>

            <div class="radio-group__button">
                <input type="radio" id="radio-button_name" class="radio-group__input" name="movie-toggle"
                       value="movie-name">
                <label for="radio-button_name" class="radio-group__label">Отсортировать по названию</label>
            </div>

            <div class="radio-group__button">
                <input type="radio" id="radio-button_year" class="radio-group__input checked" name="movie-toggle"
                       value="movie-year">
                <label for="radio-button_year" class="radio-group__label">Отсортировать по году</label>
            </div>

            <div class="search-group">

                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="search" name="search" id="search-field" class="search-field" placeholder="Найти фильм">

            </div>

        </div>
    `;
    sectionInner.insertAdjacentHTML('beforeend', filtersGroup);

    let moviesList = document.createElement('ul');
    moviesList.classList.add('movies-list');
    sectionInner.append(moviesList);

    movies.forEach(item => {
        let listItem = `<li class="movies-list__item">
            <a href="#">

                    <article class="${item.class}">

                        <div class="card__poster">
                            <img src="${item.poster}" alt="Гамильтон" class="card__img">
                        </div>

                        <div class="card__description">
                            <h3 class="card__description__title">${item.title}</h3>
                            <p class="card__description__year-genres">${item.year}, ${item.genres}</p>
                            <p class="card__description__director">режиссёр: ${item.directors}</p>
                            <p class="card__description__actors">Актёры:<span> ${item.actors}</span></p>
                            <p class="card__description__movie-description">${item.description}</p>
                        </div>

                    </article>

                </a>
            </li>`;
        moviesList.insertAdjacentHTML('beforeend', listItem);
    });

    let footer = document.createElement('footer');
    footer.classList.add('footer');
    page.append(footer);

    let footerInner =
        /*html*/
        `<div class="wrapper">
        <p class="footer__copyright">2022, Софья Гладких для Наткрекер</p>
    </div>`;
    footer.insertAdjacentHTML('beforeend', footerInner);
}

renderPage(movies);
