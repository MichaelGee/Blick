$('#post').on('click',function(e){
    e.preventDefault();
    var proposal = $('#textarea2').val();
    $.ajax({
        url:"../php/poster.php",
        method:"POST",
        dataType:'text',
        data:{propose:proposal},
        success:function(){
            $('body').load('../html/dashboard.php');
        }
    });
})