$('#regs').submit(function(e){
    e.preventDefault();
    var url = $(this).attr("action");
    var formData = $(this).serialize();
    $.ajax(url, {
        data: formData,
        type: "POST",
        success: function(response){
            $('#regs').html("<p>Signup Sucessful nigga!</p>");
        }
    });
});