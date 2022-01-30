let counterT = document.getElementById("column1").innerText;
console.log(counterT)

$(document).ready(function () {
    $("#success").click(function () {
        $('#myTable tr:last').after(``);
    })



});
