function toggleMenuIcon(){
	var arrElement=document.getElementsByClassName('child');
	for(element of arrElement){
		element.classList.toggle('clicked');
	}
}