
//factory function to make the data model for a game
function makeCard(img, name, desc, price) {
    var card = {}
    card.img = img
    card.name = name
    card.desc = desc
    card.price = price
    return card
}


//an array that will hold all our games for filtering purposes
var games = []
games.push(makeCard("../img/pubg.png", "Pubg", "Battle Ground", "300$"))
games.push(makeCard("../img/fortnite.jpg", "Fortnite", "Battle Ground", "300$"))
games.push(makeCard("../img/csgo.webp", "CSGO", "FPS", "300$"))
games.push(makeCard("../img/valo.jpg", "Valorant", "FPS", "300$"))
games.push(makeCard("../img/tekken.webp", "Tekken", "Fighting", "300$"))
games.push(makeCard("../img/brawl.jpg", "BrawlHalla", "Fighting", "300$"))
games.push(makeCard("../img/gta.webp", "Gta", "Open World", "300$"))
games.push(makeCard("../img/red.jpg", "Red Dead Redemtion", "Open World", "300$"))

//buying a game takes it to the cart

var cart = []

function addToCart(id) {
    cart.push(games[id])
    localStorage.setItem("shopify", JSON.stringify(cart))
    console.log(id)
    $('.cardcontainer').append(`
    <div class="card">
    <img src="${games[id].img}" alt="">
    <div class="parag">
    <p>${games[id].name}</p>
    <p>${games[id].desc}</p>
    <p>${games[id].price}</p>
</div>
<div class="button">
    <button id='${'p' + i}'>pay</button>
    <button id='${'r' + i}'>refund</button>
</div>
</div>
    `)
}

function pay(id) {
    var deleted = shop.splice(id, 1)
    localStorage.setItem("deleted", JSON.stringify(deleted))
    localStorage.setItem("shopify", JSON.stringify(shop))
    shop.forEach(function (element, i) {
        $('.cardcontainer').html(`
        <div class="card">
        <img src="${element.img}" alt="">
        <div class="parag">
        <p>${element.name}</p>
        <p>${element.desc}</p>
        <p>${element.price}</p>
    </div>
    <div class="button">
        <button class="pay" id="${'p' + i}" onclick="pay(${i})">pay</button>
        <button class='refund' id="${'r' + i}" onclick="refund(${i})">refund</button>
    </div>
    </div>
        `)

    });
    $(location).attr('href', '../payment/payment.html')
}

var shop = JSON.parse(localStorage.getItem('shopify'))
shop.forEach(function (element, i) {
    $('.cardcontainer').append(`
    <div class="card">
    <img src="${element.img}" alt="">
    <div class="parag">
    <p>${element.name}</p>
    <p>${element.desc}</p>
    <p>${element.price}</p>
</div>
<div class="button">
    <button class="pay" id="${'p' + i}" onclick="pay(${i})">pay</button>
    <button class='refund' id="${'r' + i}" onclick="refund(${i})">refund</button>
</div>
</div>
    `)

});
// appending my games to my store
for (var i = 0; i < games.length; i++) {

    $('.test').append(`<div class="cardGame">
    <img src="${games[i].img}" alt="">
    <div class="plus">
    <div>
    <p>${games[i].name}</p>
    <p>${games[i].desc}</p>
    <p>${games[i].price}</p>
</div>
<div class="icons">
    <a id="${'h' + i}"><i class="fa-regular fa-heart"></i></a>
    <a id="${'c' + i}"><i onclick="addToCart(${i})"  class="fa-solid fa-plus"></i></a>
</div>
</div>
</div>`)
}


//home logo tkaes you to the landing page
$('#logo').on('click', function () {
    $(location).attr('href', '../landing-page/landing-page.html')
})

//filtering by categories

$('#fight').on('click', function () {
    $('.test').empty()
    for (var i = 0; i < games.length; i++) {
        if (games[i].desc === "Fighting") {
            $('.test').append(`<div class="cardGame">
                <img src="${games[i].img}" alt="">
                <div class="plus">
                <div>
                <p>${games[i].name}</p>
                <p>${games[i].desc}</p>
                <p>${games[i].price}</p>
            </div>
            <div class="icons">
                <a id="${'h' + i}"><i class="fa-regular fa-heart"></i></a>
                <a id="${'c' + i}"><i class="fa-solid fa-plus"></i></a>
            </div>
            </div>
            </div>`)
        }
    }
})

$('#world').on('click', function () {
    $('.test').empty()
    for (var i = 0; i < games.length; i++) {
        if (games[i].desc === "Open World") {
            $('.test').append(`<div class="cardGame">
                <img src="${games[i].img}" alt="">
                <div class="plus">
                <div>
                <p>${games[i].name}</p>
                <p>${games[i].desc}</p>
                <p>${games[i].price}</p>
            </div>
            <div class="icons">
                <a id="${'h' + i}"><i class="fa-regular fa-heart"></i></a>
                <a id="${'c' + i}"><i class="fa-solid fa-plus"></i></a>
            </div>
            </div>
            </div>`)
        }
    }
})


$('#fps').on('click', function () {
    $('.test').empty()
    for (var i = 0; i < games.length; i++) {
        if (games[i].desc === "FPS") {
            $('.test').append(`<div class="cardGame">
                <img src="${games[i].img}" alt="">
                <div class="plus">
                <div>
                <p>${games[i].name}</p>
                <p>${games[i].desc}</p>
                <p>${games[i].price}</p>
            </div>
            <div class="icons">
                <a id="${'h' + i}"><i class="fa-regular fa-heart"></i></a>
                <a id="${'c' + i}"><i class="fa-solid fa-plus"></i></a>
            </div>
            </div>
            </div>`)
        }
    }
})


$('#battle').on('click', function () {
    $('.test').empty()
    for (var i = 0; i < games.length; i++) {
        if (games[i].desc === "Battle Ground") {
            $('.test').append(`<div class="cardGame">
                <img src="${games[i].img}" alt="">
                <div class="plus">
                <div>
                <p>${games[i].name}</p>
                <p>${games[i].desc}</p>
                <p>${games[i].price}</p>
            </div>
            <div class="icons">
                <a id="${'h' + i}"><i class="fa-regular fa-heart"></i></a>
                <a id="${'c' + i}"><i class="fa-solid fa-plus"></i></a>
            </div>
            </div>
            </div>`)
        }
    }
})


//filtering by name

$('#searchIcon').on('click', function () {
    var search = $('#search').val()
    if (search) {
        $('.test').empty()
        for (var i = 0; i < games.length; i++) {
            if (games[i].name.toLowerCase() === search) {
                $('.test').append(`<div class="cardGame">
                    <img src="${games[i].img}" alt="">
                    <div class="plus">
                    <div>
                    <p>${games[i].name}</p>
                    <p>${games[i].desc}</p>
                    <p>${games[i].price}</p>
                </div>
                <div class="icons">
                    <a id="${'h' + i}" ><i class="fa-regular fa-heart"></i></a>
                    <a id="${'c' + i}"><i  class="fa-solid fa-plus"></i></a>
                </div>
                </div>
                </div>`)
            }
        }
    }
})



