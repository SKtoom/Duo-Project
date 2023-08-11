$(document).ready(function(){

    libGames.forEach(function(element) {
        $(".container .center").append(`
        <div class="cardGame">
        <img src="${element.img}" alt="">
        <div class="plus">
        <div>
            <button>Play</button>
    </div>
    </div>
    </div>
    `)
    });




})