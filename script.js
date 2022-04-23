window.onload = function() {
    let btn = document.getElementById("buybutton")
    btn.onclick = function () {
    let adults = document.getElementById("adults").value;
    let child = document.getElementById("child").value;

    let price = adults*12 + child*6;
    alert("$" + price); 

    if (child<0) {
        child = 0;
    }
    
    if (adults< 0) {
        adults = 0; 
    }

    var num = 0;
while(num<child) {
        num++;
        console.log("Ticket kids #" + num)
    }

    var num = 0;
while(num<adults) {
        num++;
        console.log("Ticket #" + num)
    }
    
  
    }
}