$(".butn").on("click", function () {

    var username = $("#userName").val()
    var email = $("#email").val()
    var desc = $("#description").val()

    if (username === "") {
        $("#alert").text("Put your username")
    }
    else if (!email) {

        $("#alert").text("Put your email")


    }

    else if (desc==="") {

        $("#alert").text("Put your description")


    }
        else {
            $(location).attr("href","../landing-page/landing-page.html")
        }

})