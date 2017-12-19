//console.log("linked");
/*document.getElementById("sumDigits").onsubmit = function(event) {
    event.preventDefault();
    console.log("form submitted");
}*/
document.getElementById("submit").onclick = function() {
     event.preventDefault();
    //take the numbers from textfield and display them in our display area.
    var input = document.getElementById("input").value;
    //console.log(input);
    document.getElementById("display").innerHTML += input;
    document.getElementById("input").value = "" ;
}

document.getElementById("addDigits").onclick = function() {
    console.log("addDigits clicked");
    // get the sum of the digits from the display field.
    var display = document.getElementById("display").innerHTML;// we are just getting and not assigning.
    console.log(display);
    "123"
    var runningTotal = 0;
    for (var i=0 ; i <display.length; i++) {
        console.log(display[i]);
        runningTotal += parseInt(display[i]);
    }
    console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;
}
    
    
