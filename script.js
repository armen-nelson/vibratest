document.getElementById('circle').addEventListener('touchstart', () => {
    // Trigger haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(50); // Vibrate for 50 milliseconds
    }
});
