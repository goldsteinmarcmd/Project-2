


function assign(CoD, Comparison){
var CODdropdown = document.getElementById("CoD");
var CoD = CODdropdown.options[CODdropdown.selectedIndex].value;

var Compdropdown = document.getElementById("Comparison");
var Comparison = Compdropdown.options[Compdropdown.selectedIndex].value;

localStorage.setItem("CoDStore",CoD);
localStorage.setItem("CompStore",Comparison);
}


// var CODdropdown = document.getElementById("CoD")
// var CoD = CODdropdown.options[CODdropdown.selectedIndex].value;

// var Compdropdown = document.getElementById("Comparison")
// var Comparison = Compdropdown.options[Compdropdown.selectedIndex].value;



// alert(CoD + ", " + Comparison);
// alert("working yay!")