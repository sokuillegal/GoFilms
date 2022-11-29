'use strict';

function refresh(){
window.parent.location = window.parent.location.href;
}

const cart__films = document.querySelector('.cart__films');

function filmCart(name, image, video, genre, year, age, rating, desc){
    this.name = name;
    this.image = image;
    this.video = video;
    this.genre = genre;
    this.year = year;
    this.age = age;
    this.rating = rating;
    this.desc = desc;
}

const cartTaxi = new filmCart(
    'Такси',
    'img/taxi1.jpg',
    'trailer/taxi1.mp4',
    'Боевик, Комедия, Криминал',
    '1998',
    '16+',
    '7.9',
    'Дуэт инспектора полиции и таксиста-лихача — против грабителей банков. Начало знаменитой франшизы Люка Бессона'
);

const cartLeon = new filmCart(
    'Леон',
    'img/leon.jpg',
    'trailer/leon.mp4',
    'Боевик, Криминал, Драма',
    '1994',
    '16+',
    '8.7',
    'Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.'
);

const cartFanatik = new filmCart(
    'Фанатик',
    'img/fanatik.jpg',
    'trailer/fanatik.mp4',
    'Драма',
    '2001',
    '16+',
    '7.2',
    'В детстве еврейского мальчика по имени Дэнни Балинт выгнали из религиозной школы за вольнодумство.'
);

const cartUnderSilver = new filmCart(
    'Под Сильвер-Лэйк',
    'img/undersilverlake.jpg',
    'trailer/undersilver.mp4',
    'Драма, Триллер, Детектив',
    '2018',
    '18+',
    '6.4',
    'Бездельник Сэм ищет загадочную девушку по знакам и шифрам вокруг него. Синефильский неонуар с Эндрю Гарфилдом'
);

const cartPlaceUnder = new filmCart(
    'Место под соснами',
    'img/placeundertree.jpg',
    'trailer/placeundertree.mp4',
    'Криминал , Драма , Триллер',
    '2012',
    '16+',
    '7.3',
    'Мотокаскадер Люк Глэнтон совершает турне из одной провинции в другую, показывая свои каскадерские навыки и зарабатывая этим на жизнь.'
);

const cartLove = new filmCart(
    'Есть мечты - будут и путешествия',
    'img/love.jpg',
    'trailer/love.mp4',
    'Драма',
    '2007',
    '12+',
    '7.7',
    'Действие фильма происходит в 60-х годах прошлого века. Главный герой, мальчик по имени Бен, живет с родителями, каждый из которых имеет пунктик: мать без ума от кинозвезд, а отец обожает свою лодку и каждую свободную минуту занимается ее ремонтом.'
);


const films = [
    cartTaxi,
    cartLeon,
    cartFanatik,
    cartUnderSilver,
    cartPlaceUnder,
    cartLove
]


films.forEach(object => {
    cart__films.innerHTML+=` <div class="container">
    <div class="film__desc">
        <a href="${object.video}"><img src="${object.image}" alt="" class="size__image"></a>
        <h1 class="title__cart">${object.name}</h1>
        <p class="text__cart"><span class="other__color">Рейтинг:</span> ${object.rating}</p>
        <p class="text__cart"><span class="other__color">Год:</span> ${object.year}</p>
        <p class="text__cart"><span class="other__color">Возрастное ограничение:</span> ${object.age}</p>
        <p class="text__cart"><span class="other__color">Жанр:</span> ${object.genre}</p>
        <p class="text__cart"><span class="other__color">Описание:</span> ${object.desc}</p>
    </div>
</div>`;
})

function CreateCard(object){
    cart__films.innerHTML+=`<div class="card">
                    <div class="card__content">
                        <img src="${object.image}" alt="">
                    </div>
                    <h1 class="card__title">${object.name}</h2>
                </div>`;
}

const filterBox = this.genre;

function filterGenre(){
    document.querySelector('.main' > '.select' > 'option').addEventListener('click', (event)=> {
        if (event.target.tagName !== 'option') return false;

        let filterClass = event.target.dataset['genre'];
        console.log('log');

    })
}
