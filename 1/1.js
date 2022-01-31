let counterT = document.getElementById("column1").innerText;


$(document).ready(function () {
    //.........add Row...............
    $("#success").click(function () {
        $('#tbody tr:first').before(` `);
    })
    //.................delete Row...................
    $("#myTable").on('click','.c-Delete',function(){
        $(this).parent().parent().remove();
    });
    //.................clone Row....................
  
    $("#myTable").on('click','.c-clone',function(){
        const thisRow = $( this ).closest( 'tr' )[0];
        $( thisRow ).clone().insertAfter( thisRow ).val( "" );
        
     });
    //...........................................

});
