// Function to mute and blur the video
function muteAndBlurVideo() {
    // Target the video element
    const video = document.querySelector('video');
    if (video) {
        video.style.filter = 'blur(50px)'; // Apply a blur effect
        video.muted = true; // Mute the video
    }
}

// Run the function when the script loads
muteAndBlurVideo();

// Optional: Observe changes in the DOM to re-apply the effect if necessary
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
            muteAndBlurVideo();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
