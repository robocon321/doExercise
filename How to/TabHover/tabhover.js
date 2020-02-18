var tabLink = document.getElementsByClassName("tab-link");
var tabContent=document.getElementsByClassName("tab-content");

function hoverButton(element) {
    var index;
    for (var i = 0; i < tabLink.length; i++) {
        tabLink[i].classList.remove("active");
        if (tabLink[i] == element) {
        	index=i;
        }
    }
    element.classList.add("active");
    for(var i of tabContent){
    	i.classList.remove("open");
    }
    tabContent[index].classList.add("open");
}

tabLink[0].mouseover();