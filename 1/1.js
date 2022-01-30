let counterT=document.getElementById("column1").innerText;
console.log(counterT)

$(document).ready(function(){
    $("#success").click(function(){
        $('#myTable tr:last').after(`<tr>
        <th scope="row">${counterT++}</th>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td>@mdo</td>
    </tr>`); 
    })
});
