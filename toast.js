

var breadSelection = ["Sourdough", "Rye", "Pumpernickel"];
var counter = setInterval(timer, 1000);
var chooseBread = document.querySelector(".choose");
var anotherSlice = document.querySelector(".another-slice");
var enough = document.querySelector(".enough");
var toastBread = document.querySelector("#toast");
var eatBread = document.querySelector("#eat");
var chosenBread = pickBread();
var toast = document.querySelectorAll(".toast-button");
var waitingMessage = document.querySelector(".waiting");
var breadResult = document.querySelector(".breadResult");
var toastResult = document.querySelector(".toastResult");
var toastPic = document.querySelector(".toast-pic");
var ready = document.querySelector(".ready");
var aside = document.querySelector(".set-aside");
var plate = document.querySelector(".plate");
var noshNoise = document.querySelector(".nosh-noise");
var toastNumber = []
var toastingTime;
var count;
var realTime;

chooseBread.addEventListener("click", function(){
  chosenBread = pickBread();
  breadResult.textContent = chosenBread + " is a GREAT choice!";
  anotherSlice.classList.add("show");
  chooseBread.classList.remove("show");
});

anotherSlice.addEventListener("click", function(){
  chosenBread = pickBread();
  breadResult.textContent = chosenBread + " is a GREAT choice!";
  noshNoise.classList.remove("show");
});

for(var i = 0; i < toast.length; i++){
  toast[i].addEventListener("click", function(){
    if(this.id === "light") {
      toastingTime = 3500;
      realTime = 4;
      toastResult.textContent = "Alright, I can respect that.";
      toastPic.style.background = "#efc67a";
      waitingMessage.textContent = "Just a second...";
    } else if (this.id === "medium"){
      toastingTime = 5300;
      realTime = 6;
      toastResult.textContent = "Niiiiiiiiice!"
      toastPic.style.background = "#dda146";
      waitingMessage.textContent = "A little longer!";
    } else if (this.id === "burn"){
      toastingTime = 10300;
      realTime = 11;
      toastPic.style.background = "#775d1a";
      toastResult.textContent = "YES! Let's get TOASTY!!!"
      waitingMessage.textContent = "You're gonna have to wait a long time!";
    };
  });
};

toastBread.addEventListener("click", function(){
    count = realTime;
    timer();
    ready.classList.add("show");
  setTimeout(function(){
    toastPic.classList.add("show");
  }, toastingTime);
  waitingMessage.classList.add("show");
  setTimeout(function(){
    waitingMessage.classList.remove("show");
    ready.classList.remove("show");
  }, toastingTime);
});

aside.addEventListener("click", function(){
  toastResult.textContent = "";
  breadResult.textContent = "";
  var stacked = toastPic.cloneNode(true);
  plate.appendChild(stacked);
  toastNumber.push(stacked);
  toastPic.classList.remove("show");
  cutOff();
});

eatBread.addEventListener("click", function(arr){
  arr = toastNumber;
  var max = arr[0];
  for (var i = 0; i <= arr.length; i++){
    if(arr[i] >= max){
      max = arr[i];
    };
  };
  max.classList.remove("show");
  noshNoise.classList.add("show");
  toastNumber.pop();
  revive();
});


function pickBread(){
  var random = Math.floor(Math.random() * breadSelection.length);
  return breadSelection[random];
};

function timer (){
  count = count-1;
  if(count < 0){
    return;
  };
  document.getElementById("timer").innerHTML=count;
};

function cutOff(){
  if (toastNumber.length >= 3){
    anotherSlice.classList.remove("show");
    enough.classList.add("show");
    breadResult.textContent = "";
  }; 
};

function revive(){
  if (toastNumber.length <= 3){
    anotherSlice.classList.add("show");
    enough.classList.remove("show");
  };
};
