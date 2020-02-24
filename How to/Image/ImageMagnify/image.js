var imgView = document.getElementById("image-view");
var imgMagnify = document.createElement("div");
imgMagnify.setAttribute("id", "image-magnify");
imgView.parentNode.insertBefore(imgMagnify, imgView);

magnify();

function magnify() {
    imgView.addEventListener("mousemove", moveMagnify);
    imgMagnify.addEventListener("mousemove", moveMagnify);
    imgMagnify.style.backgroundImage = `url(${imgView.src})`;
    function moveMagnify(event) {
        var zoom=document.getElementsByTagName("input")[0].value || 1;
        console.log(zoom,document.getElementsByTagName("input")[0].value);
        var pos = getCursorPos(event);
        var cx, cy, x, y, w, h;

        x = pos.x;
        y = pos.y;

        w = imgMagnify.offsetWidth / 2;
        h = imgMagnify.offsetHeight / 2;

        if (x > imgView.width - w / zoom) x = imgView.width - w / zoom;
        if (y > imgView.height - h / zoom) y = imgView.height - h / zoom;
        if (x < w / zoom) x = w / zoom;
        if (y < h / zoom) y = h / zoom;

        imgMagnify.style.left = x - w +"px";
        imgMagnify.style.top = y - h+"px";
        imgMagnify.style.backgroundSize = imgView.width*zoom+"px "+imgView.height*zoom+"px";
        imgMagnify.style.backgroundPosition="-"+(x*zoom-w+2)+"px -"+(y*zoom-h+2)+"px";
    }

}


function getCursorPos(event) {
    var pos, x, y;
    event = event || window.event;
    pos = imgView.getBoundingClientRect();
    x = event.pageX - pos.x - window.pageXOffset;
    y = event.pageY - pos.y - window.pageYOffset;
    return { x: x, y: y };
}