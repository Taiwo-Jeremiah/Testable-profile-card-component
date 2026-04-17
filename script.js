/**
 * Stage 1B: Testable Profile Card
 * Logic: Handles the dynamic rendering of the current epoch time.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select the time element using the exact data-testid required
    const timeDisplay = document.querySelector('[data-testid="test-user-time"]');

    /**
     * Updates the DOM element with the current epoch time in milliseconds.
     */
    function updateEpochTime() {
        if (timeDisplay) {
            // Date.now() returns the exact number of milliseconds elapsed since January 1, 1970
            timeDisplay.textContent = Date.now();
        }
    }

    // 1. Initial Render: Call immediately so the time is present as soon as the page loads
    updateEpochTime();

    // 2. Update Tick: Refresh the time reasonably (every 1000ms) as per the brief's guidance
    setInterval(updateEpochTime, 1000);
});