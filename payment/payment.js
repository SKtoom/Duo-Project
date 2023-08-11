$("#confirm").on("click",function(){

var userName=$("#userName").val()
var cardNumber=$("#cardNumber").val()
var Expiration=$("#Expiration").val()
var ccv=$("#ccv").val()

if (userName===""){
    alert("put your username")
} else if (cardNumber==="" || cardNumber.length<=16){
   alert( "put a right card number")
} else if (Expiration==="" || Expiration<=4){
    alert("put your date expiration")
}else if (ccv==="" || ccv.length<=3 ){
    alert("put a correct ccv")
}
else {
    $(location).attr("href","../library/library.html")
}
})
$("#cancel").on("click",function(){
    var deleted=JSON.parse(localStorage.getItem('deleted'))
    var shop=JSON.parse(localStorage.getItem('shopify'))
    shop.push(deleted[0])
    localStorage.setItem("shopify",JSON.stringify(shop))
$(location).attr("href","../cart/cart.html")
})
var deleted=JSON.parse(localStorage.getItem("libGames"))
// function addToLibrary(){
//     deleted.forEach(function(element) {
//         $(".container .center").append(`
//         <div class="cardGame">
//         <img src="${element.img}" alt="">
//         <div class="plus">
//         <div>
//             <button>Play</button>
//     </div>
//     </div>
//     </div>
//     `)
//     });
// }

