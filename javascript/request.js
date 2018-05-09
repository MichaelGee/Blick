$('#post').on('click',function(){
    var proposal = $('#textarea2').val();
    $.ajax({
        url:"../php/poster.php",
        method:"POST",
        dataType:'text',
        data:{propose:proposal},
        success:function(data){
<<<<<<< HEAD
            $('body').html('<li>Suck my balls kyle</li>');
=======
            $('body').html(data);
>>>>>>> 2afab740694be13ab48098ba931f79ac31a1c5a3
        }
    });
})