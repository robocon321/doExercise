var sidebar = document.getElementById("sidebar");


function toggleSidebar() {
    if (sidebar.classList.contains("active")) {
        sidebar.style.width = "0px";
    } else {
        sidebar.style.width = "250px";
    }
    sidebar.classList.toggle("active");
}
