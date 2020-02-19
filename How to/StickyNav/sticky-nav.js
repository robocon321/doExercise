var navbar=document.getElementById("navbar");
var offsetTop_Navbar=navbar.offsetTop;

function myOnScroll(){
	if(window.pageYOffset>offsetTop_Navbar){
		navbar.classList.add("sticky");
	}else{
		navbar.classList.remove("sticky");
	}
}