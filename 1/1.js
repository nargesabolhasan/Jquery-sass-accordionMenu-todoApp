let counterT = document.getElementById("column1").innerText;


$(document).ready(function () {
    $("#success").click(function () {
        $('#tbody tr:first').before(`<tr>
        <th scope="row" id="column1">
            <button type="button" class=" btn btn-danger c-Delete" >Delete</button>
            <button type="button" class=" btn btn-primary c-clone" >clone</button>
        </th>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td >
            <input class="form-check-input" type="radio" name="flexRadioDefault"
                id="New">
            <label class="form-check-label" for="flexRadioDefault1" style="margin-right:30px" >
                New
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault"
                id="progress">
            <label class="form-check-label" for="flexRadioDefault1" style="margin-right:30px" >
               In progress
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault"
                id="Confirmed">
            <label class="form-check-label " for="flexRadioDefault1">
                Confirmed
            </label>
        </td>
    </tr>`);
    })

    $("#myTable").on('click','.c-Delete',function(){
        $(this).parent().parent().remove();
    });
     
});
