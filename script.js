// Get the scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to show/hide the scroll-to-top button based on the scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Function to scroll the page to the top when the button is clicked
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
