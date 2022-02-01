let counterT = document.getElementById("column1").innerText;
let counter=1

$(document).ready(function () {
    //.........add Row...............
    $("#success").click(function () {
        $('#tbody tr:first').before(`<tr class=" border border-secondary">
        <th scope="row" id="column1" class="bg-width border border-secondary">
            <!-----------------delete button----------------------->
            <button type="button" class=" btn btn-danger c-Delete">
                <i class="material-icons align-middle">delete</i>
                Delete
            </button>
            <!------------------clone button----------------------->
            <button type="button" class=" btn btn-primary c-clone">
                <i class="material-icons align-middle ">content_copy</i>
                clone
            </button>
        </th>
        <!-------------------inputs at table------------------->
        <td class="border border-right border-secondary"><input class="input-txt" type="text"></td>
        <td class="border border-right border-secondary"><input class="input-txt" type="text"></td>
        <td clsss="mytr border border-right border-secondary">
            <!-------------------radio at table-------------------->
            <div class="radio-group1 d-flex flex-row justify-content-around">
                <!------New (radio)--------->
                <label >
                    <input type="radio" name="group_1" class="opt1" value="1" />
                    New
                </label>

                <!-----In progress(radio)---->
                <label >
                    <input type="radio" name="group_1" class="opt2" value="2" />
                    In progress
                </label>

                <!-------Confirmed(radio)----->
                <label >
                    <input type="radio" name="group_1" class="opt3" value="3" />
                    Confirmed
                </label>

            </div>
        </td>
    </tr>`);
    //make different radio groups
        counter++;
        const gruop=$('.radio-group1')[1]
        $(gruop).children().children().attr('name',`group${counter}`)
    })
    
    //.................delete Row...................
    $("#myTable").on('click', '.c-Delete', function () {
        $(this).parent().parent().remove();
    });
    
    //.................clone Row....................
    $("#myTable").on('click', '.c-clone', function () {
        counter++;
        const thisRow = $(this).closest('tr')[0];
        $(thisRow).clone().insertAfter(thisRow).val("")
        .children().children().children().children().attr('name',`group${counter}`)
    });
    //................. confirmed ....................
    $(".opt3").click( function (){
         $('.input-txt').prop('placeholder',"Disabled input")
                        .prop('disabled',true)


    })
    //................. undoDisabled ....................
    function undoDisabled() {
         $('.input-txt').prop('placeholder',"")
        .prop('disabled',false)
    }
        
        $(function() {
          $('.opt1').click(undoDisabled);
          $('.opt2').click(undoDisabled) ;
        }); 
 
});
