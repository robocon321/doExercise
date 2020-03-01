function select(){
	var text=document.getElementById("text");
	var select=document.getElementById("select");
	console.log(select.value);

	text.style.mixBlendMode=select.value;
}