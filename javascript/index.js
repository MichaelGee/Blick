var $overlay = $('#overlay');



$('body').append($overlay);

$($overlay).hide();


$('#reg').click(function(){
    $($overlay).show();
    $('#login').hide();
    $('.page-footer').hide();
});



//Problems: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $username = $("#username");
var $password = $("#password2");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("#first").hide();
$("#name_id").hide();
$("#second").hide();
$("#second2").hide();



function isPasswordValid(){
    return $password.val().length > 6;
}

function passwordsDontMatch(){
    return $password.val() !== $confirmPassword.val();
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit(){
    return isPasswordValid() && arePasswordsMatching() 
}




function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()){
        //Hide hide if valid
        $('#first').hide();
    } else {
        //else show hint
        $('#first').show();
    }  
}

function confirmPasswordEvent(){
     //Find out if password and confirmation match
    if(arePasswordsMatching()){
        //Hide hint if it matches
        $('#second').hide();
    } else{
        $('#second').show();
    }   
}



function enableSubmitEvent(){
    
   $("#submit").prop("disabled", !canSubmit()); 
}




//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(enableSubmitEvent);
    


//When event happens on confirmation input 
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();



/*var $overlay = $('#overlay');
$('body').append($overlay);

$($overlay).hide();


var $username = $("#username");
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
    checkPassword();
});

function checkName(){
    var pattern = /^[a-zA-Z]*$/;
    var name =$('')
}*/




