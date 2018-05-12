$('#post').on('click',function(e){
    e.preventDefault();
    var proposal = $('#textarea2').val();
    $.ajax({
        url:"../php/poster.php",
        method:"POST",
        dataType:'text',
        data:{propose:proposal},
        success:function(){
            $('#content').load('../php/refresh.php');
        }
    });
})

$('#post').click(function(){
    $('#textarea').val('');
});