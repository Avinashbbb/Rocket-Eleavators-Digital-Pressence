$(document).ready(function(){
   
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
    
    //hiding all  options
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

    $("#appartments").on("input", function() {
        //appartments = $(this).val();
         console.log(appartments);
    });
   
    //console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)

    //function to select the type of building!!
    $("#type_of_building").on("change",function(){
        if($( "#type_of_building option:selected" ).text() == residential ){
            residentialBuilding();
        }else if($( "#type_of_building option:selected" ).text() == commercial){
            showCom();
            $("#elvators").on("input",() => {commercialBuilding();})
        }else if($( "#type_of_building option:selected" ).text() == corporate){
            corporateBuilding();
        }else if($( "#type_of_building option:selected" ).text() == hybrid){
            hybridBuilding();
        }
    })

   //.on("input",()=>{console.log($("#res_appartment").val(),"a")});

    //Declaring function for the selected type of building
    //for residential building
    function residentialBuilding() {
        showRes();
        //console.log(appartments);
       
    };
    //for commercial building
    function commercialBuilding() {
        
        let standardService = elvators * 7565;
        let premiumService = elvators * 12345;
        let exceliumService = elvators * 15400;
        let standardFees = 10/standardService*100;
        let premiumFees = 13/premiumService*100;
        let ExceliumFees = 16/exceliumService*100;
        console.log(`The fees structure is${standardFees+standardService}`)
        

    }
    //for corporate building
    function corporateBuilding() {
        showCor();
    }
    // for hybrid building
    function hybridBuilding() {
        showHyb();
    }
    // function to show and hide
    function showRes(){
        $("#line").show(900);
        resSlected.show(1000);
        comSelected.hide(500);
        corpSelected.hide(500);
        hybridSelected.hide(500);
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
    var standard = (1500 * 7565);
    var fees = 10/standard*100
    console.log( standard + fees )

});

        //console.log(residential,commercial,corporate,hybrid,select_Type_Of_Building)

