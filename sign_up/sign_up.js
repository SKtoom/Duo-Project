var arr=[]

function makeAccount(userName,email,confirmMail,password,confirmPassword,select){

return {
    userName:userName,
    email:email,
    confirmMail:confirmMail,
    password:password,
    confirmPassword:confirmPassword,
    select:select
}



}


$("#continue").on("click",function(){
    var userName= $("#userName").val()
    var email=$("#email").val()
    var confirmMail=$("#confirmEmail").val()
    var password=$("#password").val()
    var confirmPassword=$("#confirmPassword").val()
    var select=$("#selection").val()
    var inputs=$("input")
    var emailcheck=/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
    var passwordcheck=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (userName===""){
        $(".alert").text("put your userName")
    }
     else if (email==="" || !emailcheck.test(email)){
            $(".alert").text("check your email")
    }

    else if( confirmMail==="" || confirmMail !== email){
        $(".alert").text("email not match")
    }
    else if( password==="" || !passwordcheck.test(password)){
        $(".alert").text("put a strong password")
    }
    else if (confirmPassword==="" || confirmPassword!==password){
        $(".alert").text("put the same password")
    }
    else if (!select){
        $(".alert").text("put your country")
    }
   else  if ($("#check").is(":checked")){

    arr.push(makeAccount(userName,email,confirmMail,password,confirmPassword,select))
    localStorage.setItem("accounts",arr)
        }else {
    $(".alert").text("check the box ")
       
        }

})

