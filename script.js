document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        const links = document.querySelectorAll('.nav-links li');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });

    // --- Form Submission ---
    const contactForm = document.getElementById('callback-form');
    contactForm.addEventListener('submit', (e) => {
        // Prevent default form submission which reloads the page
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // --- เพิ่มเติม ---
        // ในสถานการณ์จริง ตรงนี้จะเป็นส่วนที่ส่งข้อมูลไปยัง Server หรือ Backend API
        // เช่นใช้ fetch() API เพื่อส่งข้อมูลไปเก็บในฐานข้อมูลหรือส่งอีเมล
        // ตัวอย่าง:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, phone, email, message })
        // }).then(response => response.json()).then(data => ...);

        // For this example, we will just show a success message and clear the form
        alert(`ขอบคุณคุณ ${name} ที่ติดต่อเรา!\nเราจะรีบติดต่อกลับไปที่เบอร์ ${phone} โดยเร็วที่สุดครับ`);

        // Clear the form fields
        contactForm.reset();
    });

});