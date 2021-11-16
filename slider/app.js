const modeller = [{
        name: 'Bmw 418d',
        image: './img/bmw.jpg',
        link: 'https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/bmw/1er-reihe/f20-f21-facelift/244724/'
    },
    {
        name: 'Mazda CX-3',
        image: './img/mazda.jpg',
        link: 'https://www.mazda.de/modelle/mazda-cx-3/'
    },
    {
        name: 'Volvo S60',
        image: './img/volvo.jpg',
        link: 'https://www.volvocars.com/intl/v/cars/s60'
    },
    {
        name: 'Skoda Superb',
        image: './img/skoda.jpg',
        link: 'https://www.skoda-auto.de/modelle/superb/superb-combi-sportline'
    },
    {
        name: 'Honda Civic',
        image: './img/honda.jpg',
        link: 'https://www.honda.de/cars/new/civic-5-door/overview.html'
    },
];

var index = 0;
var count = modeller.length;
var interval;

var settings = {
    duration: '2000',
    rand: false
};

init(settings);


document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    if (index == count) {
        index = 0;
    }
    change(index);
});
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;

    if (index < 0) {
        index = count - 1;
    }
    change(index);
});
document.querySelector('.fa-random').addEventListener('click', function () {
    var prev = index;
    do {

        index = Math.floor(Math.random() * count);
    } while (index == prev);
    change(index);
});
document.querySelectorAll('.halim').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});
document.querySelectorAll('.halim').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
});


function init(settings) {
    var prev;
    interval = setInterval(function () {


        if (settings.rand) {
            do {

                index = Math.floor(Math.random() * count);

            } while (index == prev)
            prev = index;


        } else {
            if (count == index + 1) {
                index = -1;
            }

            index++;
        }
        change(index);
    }, settings.duration)



};

function change(index) {
    document.querySelector('.card-img-top').setAttribute('src', modeller[index].image);
    document.querySelector('.card-title').textContent = modeller[index].name;
    document.querySelector('.card-link').setAttribute('href', modeller[index].link);
};















































/* const modeller = [{
        name: 'Bmw 418d',
        image: 'bmw.jpg',
        link: 'https://suchen.mobile.de/auto/bmw-116-gebrauchtwagen-bmw116d.html'
    },
    {
        name: 'Mazda CX-3',
        image: 'mazda.jpg',
        link: 'https://suchen.mobile.de/auto/bmw-116-gebrauchtwagen-bmw116d.html'
    },
    {
        name: 'Volvo S60',
        image: 'volvo.jpg',
        link: 'https://suchen.mobile.de/auto/bmw-116-gebrauchtwagen-bmw116d.html'
    },
    {
        name: 'Skoda Superb',
        image: 'skoda.jpg',
        link: 'https://www.skoda-auto.de/modelle/superb/superb-combi-sportline'
    },
    {
        name: 'Honda Civic',
        image: 'honda.jpg',
        link: 'https://suchen.mobile.de/auto/bmw-116-gebrauchtwagen-bmw116d.html'
    },
]

var index = 0;
var listLength = modeller.length;





document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    if (index == listLength) {
        index = 0;
    }

    change(index);
});
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = listLength - 1;
    }

    change(index);
});
document.querySelector('.fa-random').addEventListener('click', function () {
    index = Math.floor(Math.random() * listLength);
    console.log(index);
    change(index);
});

function change(index) {
    document.querySelector('.card-title').textContent = modeller[index].name;
    document.querySelector('.card-img-top').setAttribute('src', modeller[index].image);
    /* var resim = document.querySelector('.card-img-top');
    resim.setAttribute('src', modeller[2].image); 
document.querySelector('.card-link').setAttribute('href', modeller[index].link);
}*/