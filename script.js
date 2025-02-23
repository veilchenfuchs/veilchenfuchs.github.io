function updateTime() {
    const now = new Date();
    const options = { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false };
    document.getElementById("time-box").innerText = new Intl.DateTimeFormat("en-US", options).format(now) + " EST";
}
setInterval(updateTime, 1000);
updateTime();

function submitForm() {
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Message sent!\nEmail: ${email}\nMessage: ${message}`);
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".top-bar a");

    function highlightSection() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", () => {
        highlightSection();
        revealOnScroll();
    });

    revealOnScroll(); // Trigger on load
});

document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});
