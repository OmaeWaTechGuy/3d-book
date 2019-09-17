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

var url = "https://www.oreilly.co.jp/books/images/picture978-4-87311-886-4.gif";
