var signInModule = (function ($) {
    var signIn = function () {
        var email = $('#txStateEmail').val();
        var password = $('#userPassword').val();
        verifyInfo(email, password);
    };
    var verifyInfo = function (email,password) {
        $.ajax({
            type: "GET",
            url: "http://www.hallofheroesapp.com/php/signIn.php",
            dataType: "json",
            data: { email: email, password: password},
            success: function (response) {
                if (response !== -1) {
                    window.location = "home.html";
                }
                else {
                    alert("Error. User does not exist");
                }
            },
            error: function (response) {
                alert("Error:" + response);
            }
        });
    };
    return {
        signIn: signIn
    };

}(jQuery));