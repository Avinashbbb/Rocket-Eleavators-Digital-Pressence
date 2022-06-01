$(document).ready(function(){ 
    hide_all();

    $(document).change(()=>{
        selectionOfBuilding();
    })
});
$("#step_1").on("input",()=>{resetValue()});

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
//console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)

//function to select the type of building!!
function selectionOfBuilding (){
    if($( "#type_of_building option:selected" ).text() == residential ){
        showRes();
        res_selected();
    }else if($( "#type_of_building option:selected" ).text() == commercial){
        showCom();
        com_selected();
    }else if($( "#type_of_building option:selected" ).text() == corporate){
        showCor();
        hyb_selected();
    }else if($( "#type_of_building option:selected" ).text() == hybrid){
        showHyb();
        hyb_selected();
    }
}

//.on("input",()=>{console.log($("#res_appartment").val(),"a")});

//Declaring function for the selected type of building
//for commercial building
function com_selected(){
    console.log("commercial")
        mainCalculation($("#elvators").val());
}
function res_selected(){
    let averageApp = $("#appartments").val()/$("#floors").val()
    let noOnelevatorShafts = Math.ceil(averageApp/6)
    let elevatorColom = Math.ceil($("#floors").val()/20)
    function elevatorsNeeded(){
            if ($("#floors").val()>20){
            return ((elevatorColom*2)+noOnelevatorShafts);
        }else{
            return noOnelevatorShafts;
        }
    }
    mainCalculation(elevatorsNeeded());
}

function hyb_selected (){
    let noOfOccupents = Number($("#occupancy").val())*(Number($("#floors").val())+ Number($("#basments").val()));
    let elevatorsRequried = noOfOccupents/1000;
    console.log(`elevators requried ${elevatorsRequried}`)
    let noOfColums = Math.ceil((Number($("#floors").val())+Number($("#basments").val()))/20);
    console.log(`coll req${noOfColums}`)
    let elevatorsPerColom = Math.ceil(elevatorsRequried/noOfColums);
    let totalNoOfElevators = Math.ceil(elevatorsPerColom*noOfColums);

    mainCalculation(totalNoOfElevators);
}
//restlts 
function mainCalculation(input){
        
        var radios = document.getElementsByName("type_of_Service");
        var selected = Array.from(radios).find(radio => radio.checked);
        
        if (selected.value == "standard"){
            elevators_needed = input;
            one_elevator = 7565;
            total_evevators = 7565*elevators_needed;
            installation = (10/100)*total_evevators;
            final_price = installation+total_evevators;
            results();

        }else if(selected.value == "premium") {
            elevators_needed = input;
            one_elevator = 12345;
            total_evevators =12345*elevators_needed;
            installation =(13/100)*total_evevators;
            final_price = installation+total_evevators;
            results();

        } else if (selected.value == "execelium"){
            elevators_needed = input;
            one_elevator = 15400;
            total_evevators = 15400*elevators_needed;
            installation =(16/100)*total_evevators;
            final_price = installation+total_evevators;
            results();
        }
    
}


function results(){
    let res = [$("#appartments").val(),$("#floors").val(),$("#basments").val()]
    let com =[$("#floors").val(),$("#basments").val(),$("#companies").val(),$("#parking-spots").val(),$("#elvators").val()]
    let hyd =[$("#floors").val(),$("#basments").val(),$("#companies").val(),$("#parking-spots").val(),$("#occupancy").val(),$("#hours").val()]
    let cor =[$("#floors").val(),$("#basments").val(),$("#parking-spots").val(),$("#corporations").val(),$("#occupancy").val()]
    
    
    //if(numberCheck )
    checking();
    function checking (){
        res = res.every(element => element)
        com = com.every(element => element)
        hyd = hyd.every(element => element)
        cor = cor.every(element => element)
        }
        

    if( res||com||hyd||cor){
        $("#elevators_needed").html(elevators_needed),
        $("#one_elevator").html(one_elevator.toLocaleString("en-US", {style:"currency", currency:"USD"})),
        $("#total_evevators").html(total_evevators.toLocaleString("en-US", {style:"currency", currency:"USD"})),
        $("#installation").html(installation.toLocaleString("en-US", {style:"currency", currency:"USD"})),
        $("#final_price").html(final_price.toLocaleString("en-US", {style:"currency", currency:"USD"}))
    }
    else{
        $("#elevators_needed").html("Please"),
        $("#one_elevator").html("Enter"),
        $("#total_evevators").html("All The"),
        $("#installation").html("Needed"),
        $("#final_price").html("Information")
    }
}


// function to show and hide
function showRes(){
    $("#line").show(900);
    resSlected.show(1000);
    comSelected.hide(500);
    corpSelected.hide(500);
    hybridSelected.hide(500);
    $("#results").show(1000);
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
    $("#results").show(1000);
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
    $("#results").show(1000);
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

    function resetValue() {
        console.log("i am working")
        $("#appartments").val(" ");
        $("#floors").val(" ");
        $("#basments").val(" ");
        $("#companies").val(" ");
        $("#parking-spots").val(" ");
        $("#elvators").val(" ");
        $("#corporations").val(" ");
        $("#occupancy").val(" ");
        $("#hours").val(" ");
    }

        //console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)
