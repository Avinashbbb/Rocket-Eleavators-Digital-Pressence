$(document).ready(function(){ 
    hide_all();
});

//declaring building
let residential = $("#residential").text();
let commercial = $("#commercial").text();
let corporate = $("#corporate").text();
let hybrid = $("#hybrid").text();
let select_Type_Of_Building = $("#type_of_building").text();
//declaring h3 to show and hide
let resSlected = $("#res_selected");
let comSelected = $("#com_selected");
let corpSelected = $("#cor_selected");
let hybridSelected = $("#hyb_selected");
// declaring the results
var elevators_needed = 0;
var one_elevator = 0;
var total_evevators = 0;
var installation = 0;
var final_price = 0;







//declarations for thr input
// let appartments = $("#appartments").on("input").value;
let appartments =$("#appartments").on("input",function () { appartments = $(this).val();});
let floors =  $("#floors").on("input",function () { floors = $(this).val();});
let basments = $("#basments").on("input",function () { basments = $(this).val();});
let companies = $("#companies").on("input",function () { companies = $(this).val();});
let parking_spots = $("#parking-spots").on("input",function () { parking_spots = $(this).val();});
let elvators = $("#elvators").on("input",function () { elvators = $(this).val();});
let corparations = $("#corporations").on("input",function () { corparations = $(this).val();});
let occupancy = $("#occupancy").on("input",function () { occupancy = $(this).val();});
let hours = $("#hours").on("input",function () { hours = $(this).val();});

//$("#appartments").on("input", function() {
    //appartments = $(this).val();
        //console.log(appartments);
//});

//console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)

//function to select the type of building!!
$("#type_of_building").on("change",function(){
    if($( "#type_of_building option:selected" ).text() == residential ){
        showRes();
        res_selected();
        results();

    }else if($( "#type_of_building option:selected" ).text() == commercial){
        showCom();
        com_selected();
        
    }else if($( "#type_of_building option:selected" ).text() == corporate){
        showCor();
        hyb_selected();
        results();

    }else if($( "#type_of_building option:selected" ).text() == hybrid){
        showHyb();
        hyb_selected();
        results();
    }
})

//.on("input",()=>{console.log($("#res_appartment").val(),"a")});

//Declaring function for the selected type of building
//for commercial building
function com_selected(){
    $("#select_service").on ("change", ()=> {
        var radios = document.getElementsByName("type_of_Service");
        var selected = Array.from(radios).find(radio => radio.checked);
        
        if (selected.value == "standard"){
            elevators_needed = elvators;
            one_elevator = 7565;
            total_evevators = 7565*elevators_needed;
            installation = (10/100)*total_evevators;
            final_price = installation+total_evevators;
            results();

        }else if(selected.value == "premium") {
            elevators_needed = elvators;
            one_elevator = 12345;
            total_evevators =12345*elevators_needed;
            installation =(13/100)*total_evevators;
            final_price = installation+total_evevators;
            results();

        } else if (selected.value == "execelium"){
            elevators_needed = elvators;
            one_elevator = 15400;
            total_evevators = 15400*elevators_needed;
            installation =(16/100)*total_evevators;
            final_price = installation+total_evevators;
            results();
        }
    })
}
function res_selected(){
    $("#select_service").on ("change", ()=> {
        var radios = document.getElementsByName("type_of_Service");
        var selected = Array.from(radios).find(radio => radio.checked);
        if (selected.value == "standard"){
            console.log("s")
        }else if(selected.value == "premium") {
            console.log("p")
        } else if (selected.value == "execelium"){
            console.log("e")
        }
    })
}

function hyb_selected (){
    $("#select_service").on ("change", ()=> {
        var radios = document.getElementsByName("type_of_Service");
        var selected = Array.from(radios).find(radio => radio.checked);
        if (selected.value == "standard"){
            console.log("s")
        }else if(selected.value == "premium") {
            console.log("p")
        } else if (selected.value == "execelium"){
            console.log("e")
        }
    })
}
//restlts 
function results(){
$("#elevators_needed").html(elevators_needed),
$("#one_elevator").html(one_elevator),
$("#total_evevators").html(total_evevators),
$("#installation").html(installation.toFixed(2)),
$("#final_price").html(final_price.toFixed(2))
}


// function to show and hide
function showRes(){
    $("#line").show(900);
    resSlected.show(1000);
    comSelected.hide(500);
    corpSelected.hide(500);
    hybridSelected.hide(500);
    $("#results").show(900);
    $("#number-of-appartments").show(1000);
    $("#number-of-floors").show(1000);
    $("#number-of-basments").show(1000);
    $("#number-of-companies").hide(500);
    $("#number-of-parking-spots").hide(500);
    $("#number-of-elvators").hide(500);
    $("#number-of-corporations").hide(500);
    $("#maximum-occupancy").hide(500);
    $("#business-hours").hide(500);  

}
function showCom(){
    $("#line").show(900);
    comSelected.show(1000);
    resSlected.hide(500);
    corpSelected.hide(500);
    hybridSelected.hide(500);
    $("#results").show(900);
    $("#number-of-appartments").hide(500);
    $("#number-of-floors").show(1000);
    $("#number-of-basments").show(1000);
    $("#number-of-companies").show(1000);
    $("#number-of-parking-spots").show(1000);
    $("#number-of-elvators").show(1000);
    $("#number-of-corporations").hide(500);
    $("#maximum-occupancy").hide(500);
    $("#business-hours").hide(500);  
}
function showCor(){
    $("#line").show(900);
    corpSelected.show(1000);
    resSlected.hide(500);
    comSelected.hide(500);
    hybridSelected.hide(500);
    $("#show").show(900);
    $("#number-of-appartments").hide(500);
    $("#number-of-floors").show(1000);
    $("#number-of-basments").show(1000);
    $("#number-of-companies").hide(500);
    $("#number-of-parking-spots").show(1000);
    $("#number-of-elvators").hide(500);
    $("#number-of-corporations").show(1000);
    $("#maximum-occupancy").show(1000);
    $("#business-hours").hide(500);  
}
function showHyb(){
    $("#line").show(900);
    hybridSelected.show(1000);
    resSlected.hide(500);
    comSelected.hide(500);
    corpSelected.hide(500);
    $("#results").show(900)
    $("#number-of-appartments").hide(500);
    $("#number-of-floors").show(1000);
    $("#number-of-basments").show(1000);
    $("#number-of-companies").show(1000);
    $("#number-of-parking-spots").show(1000);
    $("#number-of-elvators").hide(500);
    $("#number-of-corporations").hide(500);
    $("#maximum-occupancy").show(1000);
    $("#business-hours").show(1000);  
}
//var standard = (1500 * 7565);
//var fees = 10/standard*100
//console.log( standard + fees )
    //hiding all  options
    function hide_all(){
        resSlected.hide();
        comSelected.hide();
        corpSelected.hide();
        hybridSelected.hide();
        $("#number-of-appartments").hide();
        $("#number-of-floors").hide();
        $("#number-of-basments").hide();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").hide();
        $("#number-of-elvators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
        $("#line").hide();
        $("#results").hide();
    }

        //console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)
