//helpers
function each (coll,f){
    if(Array.isArray(coll)){
        for (var i = 0; i < coll.length; i++){
            f(coll[i],i)
        }
    }
    else {
        for(var key in coll){
            f(coll[key],key)
        }
    }
    
}
function filter (coll,predicate){
    if(Array.isArray(coll)){
        var acc = []
        each (coll,function(element,i){
        if(predicate(element,i)){
            acc.push(element)
        }
    })}
    else {
        var acc = {}
        each (coll,function(element,key){
            if(predicate(element,key)){
                acc[key]=element
            }
        })
    }
    
    return acc
}
//helpers

$('#connect').on('click',function(){
    var items=JSON.parse(localStorage.getItem("accounts"))
    var user=$('#uname').val()
    var pass=$('#pass').val()
    var filtered=filter(items,function(element){
        return element.userName===user&&element.password===pass
    })
    if(filtered.length){
        location.replace("../landing-page/landing-page.html")
    }
    else{
        $(".alert").text("You don't have an account")
    }
})

$('#signup').on('click',function(){
    $(location).attr("href","../sign_up/signup.html")
})