function onOpen(color,element){
	var tabLink=document.getElementsByClassName('tab-link');
	var tabContent=document.getElementsByClassName('tab-content');
	for(var i of tabLink){
		i.classList.remove("active");
		i.style.backgroundColor="#D2D2D2";
	}
	element.classList.add("active");
	for(var i of tabContent){
		i.classList.remove("open");
	}
	tabContent[parseInt(element.id[element.id.length-1])-1].classList.add("open");
	tabContent[parseInt(element.id[element.id.length-1])-1].style.backgroundColor=color;
	element.style.backgroundColor=color;z


}