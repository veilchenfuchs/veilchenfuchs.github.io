// Clock Function
function updateTime() {
  const timeElement = document.getElementById('current-time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();

// Smooth Page Fade-In
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '1';
});

// Custom Cursor
// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Track mouse movement and update the position of the custom cursor
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Update the cursor's position
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});

// Add interactivity for hover effects (optional)
// Example: Change size and color when hovering over links
document.querySelectorAll('a, button').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.backgroundColor = 'rgba(175, 33, 207, 1)';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.backgroundColor = 'rgba(175, 33, 207, 0.7)';
  });
});
