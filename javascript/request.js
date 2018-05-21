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
    console.log('refresh');
    var id = $('#like').attr('name');
    alert(x);
};
   