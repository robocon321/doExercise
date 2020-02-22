var elements=document.getElementsByTagName("li");

function itemClick(element){
	var elements=document.getElementsByTagName("li");
	for(var i of elements){
		i.classList.remove("active");
	}
	element.classList.add("active");
}

elements[0].click();