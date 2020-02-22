function onScrollNavbar(){
	if(document.documentElement.scrollTop>20){
		document.getElementsByClassName("navbar")[0].classList.add("active");
	}else {
		document.getElementsByClassName("navbar")[0].classList.remove("active");		
	}
}