function clickItemMenu(item) {
    for (var element of document.getElementsByTagName('a')) {
        element.removeAttribute("class");
    }
    item.setAttribute("class", "active");
}

function convertDirect() {
    clickItemMenu(document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 1]);
    if(document.getElementsByTagName("div")[0].getAttribute("vertical")=="true"){
    	document.getElementsByTagName("div")[0].setAttribute("vertical",false);
    	document.getElementsByTagName("div")[0].style.width="20px";
    }else{
    	document.getElementsByTagName("div")[0].setAttribute("vertical",true);
    	document.getElementsByTagName("div")[0].style.width="auto";    	
    }
}