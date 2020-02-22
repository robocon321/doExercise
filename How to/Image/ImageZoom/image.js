var img= document.getElementById("my-image");
var imgResult=document.getElementById("my-result");
var lens = document.createElement("div");
lens.setAttribute("class", "image-lens");
img.parentNode.insertBefore(lens, img);

var lensBound = document.getElementsByClassName("image-lens")[0];

img.addEventListener("mousemove", moveLens);
lensBound.addEventListener("mousemove",moveLens);

function moveLens(event) {
   	var cx,cy,x,y;
    var cursor = getCursorPos(event);
    var pos = { ...cursor };
    pos.x = cursor.x - lensBound.offsetWidth / 2;
    pos.y = cursor.y - lensBound.offsetHeight / 2;
    if (pos.x < 0) pos.x = 0;
    if (pos.y < 0) pos.y = 0;
    if (pos.x > img.width - lensBound.offsetWidth) pos.x = img.width - lensBound.offsetWidth;
    if (pos.y > img.height - lensBound.offsetHeight) pos.y = img.height - lensBound.offsetHeight;
    lensBound.style.left = pos.x + "px";
    lensBound.style.top = pos.y + "px";

    cx=imgResult.offsetWidth/lens.offsetWidth;
    cy=imgResult.offsetHeight/lens.offsetHeight;

    imgResult.style.backgroundImage="url(https://thegrinningidiot.com/wp-content/uploads/2019/03/b-boy-la-gi.jpg)";
    imgResult.style.backgroundSize = img.width*cx+"px "+img.height*cy+"px" ;
    imgResult.style.backgroundPosition="-"+pos.x*cx+"px -"+pos.y*cy+"px";
}

function getCursorPos(event) {
    var pos, x, y;
    pos = img.getBoundingClientRect();
    x = event.pageX - pos.left - window.pageXOffset;
    y = event.pageY - pos.top - window.pageYOffset;
    return { x: x, y: y };
}