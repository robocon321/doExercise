var elements = document.querySelectorAll(".navbar>*:not(:first-child)");

function onToggleNavbar() {
    for (var element of elements) {
        element.classList.toggle("active");
    }
}