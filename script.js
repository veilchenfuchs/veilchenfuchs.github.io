function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time-display').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

document.addEventListener("DOMContentLoaded", () => {
    // Custom Cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    document.querySelectorAll("a, .box").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("large"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("large"));
    });

    // Page Load Animation
    document.querySelector(".container").classList.add("visible");

    // Different Time Update Intervals for Boxes
    function updateTime(boxId, interval) {
        function update() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            document.getElementById(boxId).textContent = timeString;
        }
        update();
        setInterval(update, interval);
    }

    updateTime("time-display", 1000);  // Updates every second
    updateTime("random-box-1", 2000);  // Updates every 2 seconds
    updateTime("random-box-2", 3000);  // Updates every 3 seconds
});
