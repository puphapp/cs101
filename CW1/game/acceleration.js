alert("Catch the Doggo!");

let angle = 0;
var XY =["199px", "264px", "326px", "38px", "400px", "164px", "46px", "288px", "500px", "700px"]
var font =["22px", "34px", "16px"]

function touch(doggo) {
   
   var rdm = font[Math.floor(Math.random()*font.length)]
    var cerc = document.getElementById("doggo")
    cerc.style.fontSize = rdm
    
   var rdm = XY[Math.floor(Math.random()*XY.length)]
    var cerc = document.getElementById("doggo")
    cerc.style.top = rdm
  
   var rdm = XY[Math.floor(Math.random()*XY.length)]
    var cerc = document.getElementById("doggo")
    cerc.style.left = rdm
}
