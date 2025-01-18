function checkDevice() {
    const rotateMessage = document.getElementById("rotateMessage");
    const mainContent = document.getElementById("mainContent");

    // Check if device width is small or in portrait mode
    if (window.innerWidth < 768 || window.innerHeight > window.innerWidth) {
        rotateMessage.style.display = "flex"; // Show rotate message
        mainContent.style.display = "none";  // Hide the main content
    } else {
        rotateMessage.style.display = "none"; // Hide rotate message
        mainContent.style.display = "block"; // Show the main content
    }
    window.addEventListener("resize", () => {
if (window.orientation !== undefined) {
    location.reload(); // Refresh the page
}
});
}

// Run the function on page load and resize
window.addEventListener("load", checkDevice);
window.addEventListener("resize", checkDevice);
const audio = new Audio("sound.mp3");
let body =document.querySelector("body");

body.addEventListener('click', ()=>{
    if (audio.paused) {
        audio.loop=true;
    audio.play();
    } else {
        audio.pause();
    }
})

