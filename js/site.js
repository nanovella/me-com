document.getElementsByClassName("topbar-menu")[0].addEventListener("click", () => {
    if(document.getElementsByClassName("topbar-pane-show")[0] != undefined) {
        document.getElementsByClassName("topbar-pane-show")[0].className = "topbar-pane";
    }
    else if(document.getElementsByClassName("topbar-pane")[0] != undefined) {
        document.getElementsByClassName("topbar-pane")[0].className = "topbar-pane topbar-pane-show";
    }
});


function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}
