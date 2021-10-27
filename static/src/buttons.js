

function togglePanel(id,panelId){
  var button = document.getElementById(id);
  var panel = document.getElementById(panelId);

  let buttons = [document.getElementById("catchment"), document.getElementById("daytank"), document.getElementById("treatment"), document.getElementById("cistern"), document.getElementById("flowMeter")];
  let panels = [document.getElementById("catchmentText"), document.getElementById("daytankText"), document.getElementById("treatmentText"), document.getElementById("cisternText"), document.getElementById("flowMeterText")];

  if(panel.style.display == "none"){
    panel.style.display = "block";
    hideButtons(button, buttons);
  }else{
    panel.style.display = "none";
    revealButtons(buttons);
  }
}

function hideButtons(button, buttons){
  for(var i = 0; i < buttons.length; i++){
    if(buttons[i] != button){
      buttons[i].style.display = "none";
    }
  }
}

function revealButtons(buttons){
  for(var i = 0; i < buttons.length; i++){
    buttons[i].style.display = "block";
  }
}




function toggleText(id,id2) {
    var a = document.getElementById(id);
    var b = document.getElementById(id2);
    a.style.display = "none";
    b.style.display = "block";

    let backs = [document.getElementById("moneyBack"), document.getElementById("floodingErosionBack"), document.getElementById("waterDemandBack"), document.getElementById("pollutionBack")];
    let fronts = [document.getElementById("money"), document.getElementById("floodingErosion"), document.getElementById("waterDemand"), document.getElementById("pollution")];

    for (var i = 0; i < backs.length; i++){
      if(!(backs[i] === a || backs[i] === b)){
        backs[i].style.display = "none";
        fronts[i].style.display = "block";
      }
    }
}
