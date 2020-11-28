let colors = randomNumber(6);
let square = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colordisplay");
let message = document.querySelector("#message");
let backgroundColor = document.querySelector("h1");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let playButton = document.querySelector("#playbutton");


colorDisplay.textContent = pickedColor;

for (let i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      message.textContent = "You Win!!";
      backgroundColor.style.backgroundColor = pickedColor
      changeColor(clickedColor);
      playButton.textContent ="Play Again?"

    } else {
      this.style.backgroundColor ="#232323";
    }
  })
}

function changeColor(color){
  for (let i = 0; i < square.length; i++) {
    square[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomNumber(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(number());
  }
  return arr;
}

function number() {
  let r = Math.floor(Math.random()* 256);
  let g = Math.floor(Math.random()* 256);
  let b = Math.floor(Math.random()* 256);
  return `rgb(${r}, ${g}, ${b})`;
}

easy.addEventListener("click", function(){
  easy.classList.add("clicked");
  hard.classList.remove("clicked");
  easyMode();
  });


hard.addEventListener("click", function(){
  hard.classList.add("clicked");
  easy.classList.remove("clicked");
  hardMode();
})

playButton.addEventListener("click", function(){
  //change background color of title
  backgroundColor.style.backgroundColor = "#5388fa"
  //generate all new colors
  colors = randomNumber(6);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change color of squares on the page
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
});


function easyMode() {
  colors = randomNumber(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i];
    }
    else {
      square[i].style.display = "none";
    }
  }
};

function hardMode() {
  colors = randomNumber(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    }
};

