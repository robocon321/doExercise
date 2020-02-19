var sidenav=document.getElementsByClassName("sidenav-push")[0];

function toggleSideNav(){
	if(sidenav.classList.contains("active")){
		sidenav.style.width="250px";
	}else{
		sidenav.style.width="0px";
	}
	sidenav.classList.toggle("active");
}
