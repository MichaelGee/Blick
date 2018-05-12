//The type effect
(function(){
	var app;
	$(document).ready(function(){
		return app.init();
	});
	app = {
		text: "A simple platform for the expression of political views and proposals..",
		index: 0,
		chars: 0,
		speed: 100,
		container: '.text .content',
		init: function(){
			this.chars = this.text.length;
			return this.write();
		},
		write: function(){
			$(this.container).append(this.text[this.index]);
			if(this.index<this.chars){
				this.index++;
				return window.setTimeout(function(){
					return app.write();
				}, this.speed);
			}
		}
	};
}.call(this));



var $overlay = $('#overlay');



$('body').append($overlay);

$($overlay).hide();


$('#reg').click(function(){
    $($overlay).show();
    $('#login').hide();
    $('.page-footer').hide();
});

$('#exit').click(function(){
	$($overlay).hide();
	$('#login').show();
	$('.page-footer').show();
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




