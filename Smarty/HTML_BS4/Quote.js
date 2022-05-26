$(document).ready(function(){
    let residential = $("#residential").text();
    let commercial = $("#commercial").text();
    let corporate = $("#corporate").text();
    let hybrid = $("#hybrid").text();
    let select_Type_Of_Building = $("#type_of_building").text();
    //console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)
    $("#type_of_building").on("click",function(){

        if($( "#type_of_building option:selected" ).text() == residential ){
            console.log(residential);
        }else if($( "#type_of_building option:selected" ).text() == commercial){
            console.log(commercial);
        }else if($( "#type_of_building option:selected" ).text() == corporate){
            console.log(corporate);
        }else if($( "#type_of_building option:selected" ).text() == hybrid){
            console.log(hybrid)
        }

    })

});
        //console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)

