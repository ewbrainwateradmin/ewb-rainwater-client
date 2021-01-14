// Initialise an instance of our router class.
const router = new Router(routes);



// function getTimeAndDate() {
//
//   var currentTime = document.getElementById("time");
//   var currentDate = document.getElementById("date");
//   var d = new Date();
//
//   var date = (d.getMonth()+1)+ " " + d.getDate() + ", " +  d.getFullYear();
//
//   var m = d.getMinutes();
//   var h = d.getHours();
//   currentTime.innerHTML = h + ":" + m;
//   currentDate.innerHTML = date;
// }
//
// setInterval(getTimeAndDate, 1000);


function getTimeAndDate() {
    var currentTime = document.getElementById("time");
    var currentDate = document.getElementById("date");

    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();



    var date = (d.getMonth()+1)+ " " + d.getDate() + ", " +  d.getFullYear();

    var am = "AM";

    if (h > 12) {
        h = h - 12;
        var am = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    currentTime.innerHTML = h + ":" + m;
    currentDate.innerHTML = date;

}

var interval = setInterval(getTimeAndDate, 1000);
