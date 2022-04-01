// title section gif
var gifIndex =  0;

function showGif(){
  var i;
  var gif = document.getElementsByClassName("myGif");
  for (i = 0; i < gif.length; i++){
    gif[i].style.display = "none";
  }
  gifIndex++;

  if(gifIndex > gif.length){gifIndex = 1}

  gif[gifIndex-1].style.display = "block";
  setTimeout(showGif, 600);
}

//team section carousel
var teamIndex = 1;

function Btn(n){
  showTeam(teamIndex += n);
}

function showTeam(n){
  var a;
  var myTeam = document.getElementsByClassName("myTeam");
  if (n > myTeam.length){teamIndex = 1}
  if (n < 1 ){ teamIndex = myTeam.length}
  for (a = 0; a < myTeam.length; a++){
    myTeam[a].style.display = "none";
  }

  myTeam[teamIndex-1].style.display = "block";
}

//onscroll button
function scrollBtnFunc(){
  const ScrollBtn = document.querySelector("scrollBtn");
  var show = document.getElementsByClassName("show");
  var show = document.getElementsByClassName("hide");

  var y = window.scrollY;

  if(y > 100){
    scrollBtn.classList.add("show", "fade");
    scrollBtn.classList.remove("hide");
  }
  else{
    scrollBtn.classList.add("hide");
    scrollBtn.classList.remove("show", "fade");
  }
}

window.addEventListener("scroll", scrollBtnFunc);

// appearance
function appearanceFunc(){
  var myAppearance = document.getElementById("myAppearance");

  if(myAppearance.style.display == "none"){
    myAppearance.style.display = "block";
  }
  else{
    myAppearance.style.display = "none";
  }
}

//appearrance color switch
var colorIndex = 0;

function color(colorIndex){
  colorSwitch(colorIndex);
}

function colorSwitch(colorIndex){
  const defaultColor = document.querySelector("myDefaultColor");
  const secondColor = document.querySelector("mySecondColor");
  const thirdColor = document.querySelector("myThirdColor");
  const bgColor = document.querySelectorAll(".bgColor");
  const scrollButton = document.querySelector(".myScrollBtn");

  if(colorIndex == 2){
    mySecondColor.classList.add("activeColor");
    myDefaultColor.classList.remove("activeColor");
    myThirdColor.classList.remove("activeColor");

    for(var c = 0; c < bgColor.length; c++){
      bgColor[c].style.backgroundColor = "#040303";
      scrollButton.style.backgroundColor = "#040303";
    }
  }
  else if(colorIndex == 3){
    myThirdColor.classList.add("activeColor");
    myDefaultColor.classList.remove("activeColor");
    mySecondColor.classList.remove("activeColor");

    for(var c = 0; c < bgColor.length; c++){
      bgColor[c].style.backgroundColor = "#3A3845";
      scrollButton.style.backgroundColor = "#3A3845";
    }

  }
  else{
    myDefaultColor.classList.add("activeColor");
    mySecondColor.classList.remove("activeColor");
    myThirdColor.classList.remove("activeColor");

    for(var c = 0; c < bgColor.length; c++){
      bgColor[c].style.backgroundColor = "#04293A";
      scrollButton.style.backgroundColor = "#04293A";
    }
  }

  // to save color
  var savedColor = localStorage.setItem("savedColor", colorIndex);

}

// to retrieve colorsaved
function savedColor(){
  color(localStorage.getItem("savedColor"));
}
