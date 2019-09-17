var root = document.querySelector("#root");

var flip = document.querySelector("#flip");
var flip__div__div = document.querySelector("#flip div > div");
var book__top = document.querySelector("#book #top");
var book__shadow = document.querySelector("#book #shadow");

var isPlaying = false;

root.addEventListener("click", function(e) {
  if (!isPlaying) {
    flip.className = "flip--hover";
    //flip__div__div.className = "flip__div__div--hover";
    book__top.className = "book__top--hover"; //shadow right
    book__shadow.className = "book__shadow--hover"; //shadow left
    isPlaying = true;
  } else {
    flip.className = "";
    //flip__div__div.className = "";
    book__top.className = "";
    book__shadow.className = "";
    isPlaying = false;
  }
});

var err_msg = document.querySelector("#err_msg");
var url_cover = document.querySelector("#url_cover");
url_cover.addEventListener("change", function(event) {
  var urlValue = event.target.value.trim();
  var imageValue = 'url("./images/cover.jpg")';
  if (urlValue.match(/\.(jpg|jpeg|png|gif)$/i)) {
    imageValue = "url(" + urlValue + ")";
    err_msg.innerHTML = "";
  } else {
    err_msg.innerHTML = "Invalid url.";
  }
  document.querySelector("#flip #front").style.backgroundImage = imageValue;
  var divList = document.querySelectorAll("#flip #front div");
  divList.forEach(element => {
    element.style.backgroundImage = imageValue;
  });
});

window.addEventListener("load", function() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(function(registration) {
        console.log("serviceWorker registed.");
      })
      .catch(function(error) {
        console.warn("serviceWorker error.", error);
      });
  }
});
