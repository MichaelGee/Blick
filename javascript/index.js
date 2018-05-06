
var $overlay = $('#overlay');
$('body').append($overlay);

$($overlay).hide();


var $username = $("#name");
var $password = $("#password2");
var $confirmPassword = $("#confirm_password");


$('#reg').click(function(){
    $($overlay).show();
    $('#login').hide();
    $('.page-footer').hide();
});



//Hide hints
$("#first").hide();
$("#name_id").hide();
$("#second").hide();
$("#second2").hide();


var errorName = false;
var errorPassword = false;
var errorReenter = false;

$("$username").focusout(function(){
    checkName();
});

$("$password").focusout(function(){
    checkPassword();
});

$("$confirmPassword").focusout(function(){
    checkRepassword();
});

function checkName(){
    var pattern = /^[a-zA-Z]*$/;
    var name =$('$username').val();
    if(pattern.test(name) && name !== ' '){
        $("#name_id").hide();
    }else{
        $("#name_id").show();
        errorName = true;
    }
}


function checkPassword(){
    var passwordLength = $('#password').val().length;
    if(passwordLength < 6){
        $("#first").show();
        errorPassword = true;
    } else{
        $("#first").hide();
    }
}

function checkRepassword (){
    var password = $("#password").val();
    var retypePassword = $("#confirmPassword").val();
    if (password !== retypePassword){
        $("#second").show();
        errorReenter = true;
    }else{
        $("#second").hide();
    }
}


$("#regs").submit(function(){
    errorName = false;
    errorPassword = false;
    errorReenter = false;

    checkName();
    checkPassword();
    checkRepassword();

    if(errorName === false && errorPassword === false && errorReenter === false){
        alert("Registration Successful!");
        return true;
    }else{
        alert("Please fill the form correctly");
        return false;
    }
});




