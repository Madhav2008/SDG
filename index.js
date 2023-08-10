// This function animates the header text
function animateHeader() {
    var header = document.querySelector(".header");
    var text = header.querySelector("h1");
  
    text.style.opacity = 0;
  
    var interval = setInterval(function() {
      text.style.opacity += 0.05;
  
      if (text.style.opacity >= 1) {
        clearInterval(interval);
      }
    }, 10);
  }
  
  // This function adds a translucent background to the image
  function addTranslucentBackground() {
    var image = document.querySelector(".image");
    var background = document.createElement("div");
  
    background.style.position = "absolute";
    background.style.top = "0";
    background.style.left = "0";
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)";
  
    image.appendChild(background);
  }
  
  window.onload = function() {
    animateHeader();
    addTranslucentBackground();
  };