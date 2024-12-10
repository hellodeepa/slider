let slider2 = document.getElementById('slider2');
let lastX = null;
let lastY = null;
let lastZ = null;
let shakeThreshold = 15; // Sensitivity level for shaking
let sliderRevealed = false; // Track if the second slider has been revealed

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', (event) => {
        let acc = event.acceleration || event.accelerationIncludingGravity;

        if (lastX !== null && lastY !== null && lastZ !== null) {
            // Calculate the shake intensity
            let deltaX = Math.abs(acc.x - lastX);
            let deltaY = Math.abs(acc.y - lastY);
            let deltaZ = Math.abs(acc.z - lastZ);

            if (deltaX + deltaY + deltaZ > shakeThreshold && !sliderRevealed) {
                // Reveal the second slider
                slider2.style.display = 'block';
                sliderRevealed = true;
                alert("Second slider revealed!");
            }
        }

        // Update the last known acceleration values
        lastX = acc.x;
        lastY = acc.y;
        lastZ = acc.z;
    });
} else {
    alert("DeviceMotionEvent is not supported on your device.");
}