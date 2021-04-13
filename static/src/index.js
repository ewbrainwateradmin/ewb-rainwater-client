




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

