$("#confirm").on("click",function(){

var userName=$("#userName").val()
var cardNumber=$("#cardNumber").val()
var Expiration=$("#Expiration").val()
var ccv=$("#ccv").val()

if (userName===""){
    alert("put your username")
} else if (cardNumber==="" || cardNumber.length!==16){
   alert( "put a right card number")
} else if (Expiration==="" || Expiration>4){
    alert("put your date expiration")
}else if (ccv==="" || ccv.length!==3 ){
    alert("put a correct ccv")
}
else {
    $(location).attr("href","../library/library.html")
}
})
$("#cancel").on("click",function(){
$(location).attr("href","../cart/cart.html")
})