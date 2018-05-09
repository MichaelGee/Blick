$('#post').on('click',function(){
    var proposal = $('#textarea2').val();
    $.ajax({
        url:"../php/poster.php",
        method:"POST",
        dataType:'text',
        data:{propose:proposal},
        success:function(data){
            $('body').html('<li>Suck my balls kyle</li>');
        }
    });
})