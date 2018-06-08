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
            $('#textarea2').val('');
        }
    });
})

function refresh(){
    $('#content').load('../php/refresh.php');
}
setInterval(refresh,2000);

function like(x){
    var id = x;
    $.ajax({
        url:"../php/liker.php",
        method:"POST",
        dataType:'text',
        data:{identification:id},
        success:function(){
            $('#content').load('../php/refresh.php');
        }
    });
};
