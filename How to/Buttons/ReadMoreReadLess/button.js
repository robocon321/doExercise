var btn=document.getElementById("btn");
var showMore=document.getElementById("more");
var dots=document.getElementById("dots");
btn.addEventListener("click",toggleDisplay);

function toggleDisplay(){
	if(showMore.style.display=="none"){
		showMore.style.display="inline";
		dots.style.display="none";
	}else{
		showMore.style.display="none";
		dots.style.display="inline";
	}
}