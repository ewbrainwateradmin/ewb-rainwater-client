// Initialise an instance of our router class.
const router = new Router(routes);

function textChange() {

  var x = document.getElementById("button5");
  if(x.innerHTML == "reduces flooding & erosion"){
    x.innerHTML = "Rainwater harvesting diverts water that would otherwise cause flooding and erosion in events of high rainfall. ";
  }
  else if(x.innerHTML == "saves money"){
    x.innerHTML = "Once the system is installed, no payment is needed for the water, whereas municipal water is paid for by use.";
  }
  else if(x.innerHTML == "reduces water demand"){
    x.innerHTML = "Switching to rainwater reduces demand of the municipal water supply.";

  }
  else if(x.innerHTML == "reduces pollution transportation"){
    x.innerHTML = "Rainwater harvesting can divert water that would run into lakes and carry with it all of the pollutants from the roads.";
  }


  }
