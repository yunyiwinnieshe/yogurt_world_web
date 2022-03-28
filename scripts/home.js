// function toggleNavBar() {
//     let navButton = document.getElementById("hamburgerIcon2"); 

//     if (navButton.className == "fa fa-bars menu-toggle") {
//         navButton.className = "fa fa-close"; 
//     }
//     else if (navButton.className == "fa fa-close") {
//         navButton.className = "fa fa-bars menu-toggle"; 
//     }
// }   

function toggleNavBar() {
    let navButton = document.getElementById("hamburgerIcon2"); 
    let toggle = document.getElementById("toggle"); 

    if (!toggle.checked) {
        navButton.className = "fa fa-close"; 
    }
    else {
        navButton.className = "fa fa-bars menu-toggle"; 
    }

}   
