var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".animated-text");
    const texts = ["UI/UX Designer", "Web Developer"];
    let index = 1;

    setInterval(() => {
        textElement.style.opacity = 0; // Start fading out
        setTimeout(() => {
            textElement.textContent = texts[index];
            textElement.style.opacity = 1; // Fade back in
            index = (index + 1) % texts.length;
        }, 500); // Match this time with the CSS transition duration
    }, 4000); // Change text every 4 seconds
});





document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".animated-text");
    const texts = ["UI/UX Designer", "Web Developer"];
    let index = 1;

    setInterval(() => {
        textElement.style.opacity = 0; // Start fading out
        setTimeout(() => {
            textElement.textContent = texts[index];
            textElement.style.opacity = 1; // Fade back in
            index = (index + 1) % texts.length;
        }, 500); // Match this time with the CSS transition duration
    }, 4000); // Change text every 4 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.social-icons .img-section img');

    // Add click event listener to each image
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            if (img.classList.contains('zoomed')) {
                img.classList.remove('zoomed'); // Remove zoomed class if already zoomed
            } else {
                // Remove 'zoomed' class from all images except the clicked one
                images.forEach(function(el) {
                    if (el !== img && el.classList.contains('zoomed')) {
                        el.classList.remove('zoomed');
                    }
                });
                img.classList.add('zoomed'); // Add zoomed class to the clicked image
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header ul.header-content li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId); // Find target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            }
        });
    });
});