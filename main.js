let modeSelect = document.querySelector("mode-switcher");
let curMode="light";
modeSelect.addEventListener("dblclick", ()=>{
    if (curMode=="light"){

        document.querySelector("body").style.backgroundColor="black";
        curMode="dark"
        console.log("dark.");
    }
    else{
        
        document.querySelector("body").style.backgroundColor="pink";
        curMode="light";
        console.log("light.");
    }
    
}
);

// FOR ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}