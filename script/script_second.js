'use strict';

const block = document.querySelector('.block');

const mainPage = window.location.href.toString();

const films = [
    {
        id: 0,
        name: 'Уроки фарси',
        image: 'img/farsi.jpg',
        genre: 'Драма, Военный, История',
        year: '2020',
        age: '16+',
        rating: '7.9',
        desc: 'Еврей выдает себя за перса, чтобы выжить в концлагере. Один из лучших российских фильмов о холокосте'
    },
    {
        id: 1,
        name: 'Под Сильвер-Лэйк',
        image: 'img/undersilverlake.jpg',
        genre: 'Драма, Триллер, Детектив',
        year: '2018',
        age: '18+',
        rating: '6.4',
        desc: 'Бездельник Сэм ищет загадочную девушку по знакам и шифрам вокруг него. Синефильский неонуар с Эндрю Гарфилдом'
    },
    {
        id: 2,
        name: 'Место под соснами',
        image: 'img/placeundertree.jpg',
        genre: 'Криминал, Драма, Триллер',
        year: '2012',
        age: '16+',
        rating: '7.3',
        desc: 'Мотокаскадер Люк Глэнтон совершает турне из одной провинции в другую, показывая свои каскадерские навыки и зарабатывая этим на жизнь.'
    },
    {
        id: 3,
        name: 'Линкольн для адвоката',
        image: 'img/lincoln.jpg',
        genre: 'Криминал, Триллер, Драма, Детектив',
        year: '2011',
        age: '16+',
        rating: '7.8',
        desc: 'Адвокат решает доказать вину клиента. Мэттью МакКонахи в судебном триллере по бестселлеру Майкла Коннелли'
    },
    {
        id: 4,
        name: 'Есть мечты - будут и путешествия',
        image: 'img/love.jpg',
        genre: 'Драма',
        year: '2007',
        age: '12+',
        rating: '7.7',
        desc: 'Действие фильма происходит в 60-х годах прошлого века. Главный герой, мальчик по имени Бен, живет с родителями, каждый из которых имеет пунктик: мать без ума от кинозвезд, а отец обожает свою лодку и каждую свободную минуту занимается ее ремонтом.'
    },
    {
        id: 5,
        name: 'Фанатик',
        image: 'img/fanatik.jpg',
        genre: 'Драма',
        year: '2001',
        age: '16+',
        rating: '7.2',
        desc: 'В детстве еврейского мальчика по имени Дэнни Балинт выгнали из религиозной школы за вольнодумство.'
    },
    {
        
        id: 6,
        name: 'Такси',
        image: 'img/taxi1.jpg',
        genre: 'Боевик, Комедия, Криминал',
        year: '1998',
        age: '16+',
        rating: '7.9',
        desc: 'Дуэт инспектора полиции и таксиста-лихача — против грабителей банков. Начало знаменитой франшизы Люка Бессона'
    },
    {
        id: 7,
        name: 'Леон',
        image: 'img/leon.jpg',
        genre: 'Боевик, Криминал, Драма',
        year: '1994',
        age: '16+',
        rating: '8.7',
        desc: 'Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.'    
    },
];

for (let i = 0; i < 8; i++){
    if(i === +mainPage.substr(mainPage.length - 1)){
        block.innerHTML += `<h1 class="title__cart__second">Название</h1>
        <div class="glue">
            <img src="${films.image}" alt="" class="size__image__second">
            <div class="description">
                <p class="text__cart"><span class="other__color">Жанр: </span>${films.genre}</p>
                <p class="text__cart"><span class="other__color">Возрастное ограничение: </span>${films.age}</p>
                <p class="text__cart"><span class="other__color">Рейтинг: </span>${films.rating}</p>
                <p class="text__cart"><span class="other__color">Год: </span>${films.desc}</p>
            </div>
        </div>`
    }
}
