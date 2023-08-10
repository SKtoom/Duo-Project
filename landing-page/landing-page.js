function makeCard(img,name,desc,price){
    var card={}
    card.img=img
    card.name=name
    card.desc=desc
    card.price=price
    return card
}

var games=[]
games.push(makeCard("../img/pubg.png","Pubg","Battle Ground","300$"))
games.push(makeCard("../img/fortnite.jpg","Fortnite","Battle Ground","300$"))
games.push(makeCard("../img/csgo.png","CSGO","FPS","300$"))
games.push(makeCard("../img/valo.jpg","Valorant","FPS","300$"))
games.push(makeCard("../img/tekken.png","Tekken","Fighting","300$"))
games.push(makeCard("../img/brawl.png","BrawlHalla","Fighting","300$"))
games.push(makeCard("../img/gta.png","Gta","Open World","300$"))
games.push(makeCard("../img/red.png","Red Dead Redemtion","Open World","300$"))
console.log(games)
for(var i=0;i<games.length;i++){
    $('.test').append(`<div class="cardGame">
    <img src="${games[i].img}" alt="">
    <div class="plus">
    <div>
    <p>${games[i].name}</p>
    <p>${games[i].desc}</p>
    <p>${games[i].price}</p>
</div>
<div class="icons">
    <a href=""><i class="fa-regular fa-heart"></i></a>
    <a href=""><i class="fa-solid fa-plus"></i></a>
</div>
</div>
</div>`)
}