initComparison();

function initComparison() {
    var elements = document.getElementsByClassName("img-overlay");
    for (var element of elements) {
        compareImage(element);
    }
}

function compareImage(img) {
    var w, h, clicked = 0;
    var slide = document.createElement("div");
    slide.setAttribute("class", "img-slide");
    img.parentNode.insertBefore(slide, img);

    w = img.offsetWidth;
    h = img.offsetHeight;

    img.style.width=w/2+"px";

    slide.style.top = h / 2 - slide.offsetHeight / 2 + "px";
    slide.style.left = w / 2 - slide.offsetWidth / 2 + "px";

    slide.addEventListener("mousedown", slideStart);
    slide.addEventListener("mouseup", slideEnd);

    function slideStart(event) {
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
    }

    function slideEnd(event) {
        clicked = 0;
    }

    function slideMove(event) {
    	var x;
        if (clicked == 0) return false;

        x = getCursorPos(event);

        if (x < 0) x = 0;
        if (x > w) x = w;
        slideIt(x);
    }

    function getCursorPos(event) {
        var pos, x, e;
        e = event || window.event;
        pos = img.getBoundingClientRect();
        x = event.pageX - pos.left - window.pageXOffset;
        return x;
    }

    function slideIt(x) {
    	img.style.width=x+"px";
    	slide.style.left=img.offsetWidth-slide.offsetWidth/2+"px";
    }
}