var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    var j = i;
    console.log(i,j);
    acc[i].addEventListener("click", function() {
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('section-active');
    });
}