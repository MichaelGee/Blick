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

function reload(){
    $('#content').load('../php/refresh.php');
}
//setInterval(reload,2000);
$( "ul li div #like" ).click(function() {
    alert($(this).attr('name'));
    
});
   