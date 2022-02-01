let counterT = document.getElementById("column1").innerText;
let counter=1
let tr=$('tr').length-1
let NotConfirmed=$('tr').length-1

$(document).ready(function () {
    //.........add Row...............
    $("#success").click(function () {
        $('#tbody tr:first').before(`<tr class=" border border-secondary">
        <th scope="row" id="column1" class="bg-width border border-secondary">
            <button type="button" class=" btn btn-danger c-Delete">
                <i class="material-icons align-middle">delete</i>
                Delete
            </button>
            <button type="button" class=" btn btn-primary c-clone">
                <i class="material-icons align-middle ">content_copy</i>
                clone
            </button>
        </th>
        <td class="border border-right border-secondary"><input class="input-txt" type="text"></td>
        <td class="border border-right border-secondary"><input class="input-txt" type="text"></td>
        <td clsss="mytr border border-right border-secondary">
            <div class="radio-group1 d-flex flex-row justify-content-around">
                <label >
                    <input type="radio" name="group_1" class="opt1" value="1" />
                    New
                </label>
                <label >
                    <input type="radio" name="group_1" class="opt2" value="2" />
                    In progress
                </label>
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
    //Rows Number
        tr++
        NotConfirmed++
        $("#rows-number").text(tr)
        $("#Not-confirmed-rows").text(NotConfirmed)
    })
    
    //.................delete Row...................
    $("#myTable").on('click', '.c-Delete', function () {
        $(this).parent().parent().remove();

        //Rows Number
         tr--
         $("#rows-number").text(tr)
        //Not-confirmed-rows: 
        const thisRow = $(this).closest('tr')[0];
        if(!($(thisRow).find(".opt3").is(':checked'))){
            NotConfirmed--
            $("#Not-confirmed-rows").text(NotConfirmed)
        }
    });
    
    //.................clone Row....................
    $("#myTable").on('click', '.c-clone', function () {
        counter++;
        const thisRow = $(this).closest('tr')[0];
        let beforCreateNew=$(thisRow).clone()
        let afterCreateNew=$(thisRow).find("div label input")
        .attr('name',`group${counter}`).clone().val("")
        
        $(beforCreateNew).val("afterCreateNew")
        .insertAfter(thisRow)

         //Rows Number:
         tr++
         $("#rows-number").text(tr)
         //Not-confirmed-rows:
         if(!($(thisRow).find(".opt3").is(':checked'))){
            NotConfirmed++
            $("#Not-confirmed-rows").text(NotConfirmed)
        }
    });
    //................. confirmed ....................
    $("#myTable").on('click', '.opt3', function () {
        const thisRow = $(this).closest('tr')[0];
        $(thisRow).find(".input-txt").prop('placeholder',"Disabled input")
                       .prop('disabled',true)

        //not confirmed rows: 
         NotConfirmed--      
         $("#Not-confirmed-rows").text(NotConfirmed)
    })
    //................. undoDisabled ..................
    function undoDisabled() {
         $('.input-txt').prop('placeholder',"")
        .prop('disabled',false)
    }
        
        $(function() {
          $('.opt1').click(undoDisabled);
          $('.opt2').click(undoDisabled) ;
        }); 

    //..................................................

    
});
