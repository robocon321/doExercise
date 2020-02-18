var arrNavLink=document.getElementById("top-nav").children;

function scrollNav(){
	document.getElementById("top-nav").classList.toggle("responsive");
}

function activeNavLink(element){
	for(var i of arrNavLink){
		i.classList.remove("active");
	}
	element.classList.add("active");
}