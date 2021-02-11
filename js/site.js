const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    console.log(navLinks)

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7 + 1}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

// function _class(name){
//     return document.getElementsByClassName(name);
// }

// let tabHeads = _class("tab-header")[0].getElementsByTagName("div");
// let tabPanes = _class("tab-content")[0].getElementsByTagName("div");

// for(let i=0;i<tabHeads.length;i++){
//     tabHeads[i].addEventListener("click", () => {
//         _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
//         tabHeads[i].classList.add("active");
//         _class("tab-indicator")[0].style.top = `calc(80px + ${i * 50}px)`;
//         _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
//         tabPanes[i].classList.add("active");
//     });
// }

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
