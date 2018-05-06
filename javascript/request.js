$('#post').on('click',function(){
    var proposal= $('#textarea1');
    $.ajax({
        url:"../php/poster.php",
        type:"POST",
        data:{propose:proposal},
        success:function(response){
            $('#textarea').html(response);
        }
    });
})