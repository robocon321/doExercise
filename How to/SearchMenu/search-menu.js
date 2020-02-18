var items = document.getElementsByTagName("li");


function inputValue(element) {
    for (var i of items) {
        if (i.children[0].textContent.toLowerCase().indexOf(element.value.toLowerCase()) < 0) {
            i.classList.add("active");

        } else
            i.classList.remove("active");
    }
}