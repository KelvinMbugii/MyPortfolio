
/*-----------------------------Toogle icon navbar------------------------------------- */
let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('');
    navbar.classList.toggle('active');
}

/*-----------------------------Download CV Button --------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".btn");

    downloadBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Create a temporary link
        const cvLink = document.createElement("a");
        cvLink.href = "assets/My_CV.pdf"; // Path to your CV
        cvLink.download = "Kelvin_Weru_CV.pdf"; // File name for download
        document.body.appendChild(cvLink);
        cvLink.click();
        document.body.removeChild(cvLink);
    });
});

/*-----------------------------Scroll sections active link------------------------------- */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });

    /*--------------sticky navbar------------------ */
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /*--------remove toggle icon and navbar when click navbar link (scroll)---------- */
    menuIcon.classList.toggle();
    navbar.classList.remove('active');
};