// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            this.reset();
        });

        // Mobile menu toggle (basic implementation)
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

    function sendMail(){
        let params = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            subject : document.getElementById("subject").value,
            message : document.getElementById("message").value
        }

        emailjs.send("service_ku2ka3l", "template_31l6kxd", params)
        .then(() => {
        showPopup(); // instead of alert
        }, (err) => {
        alert("Failed to send message: " + JSON.stringify(err));
            });
        }

    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    // Show popup
    function showPopup() {
    popup.classList.remove("hidden");
    }

    // Hide popup
    closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
    });

    // Also hide if user clicks outside the box
    window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.add("hidden");
    }
    });








        var map = L.map('map').setView([14.071241029533432, 121.02351357412338], 11); 

        var customIcon = L.icon({
            iconUrl: 'images/house_map_icon.png',  // your icon
            iconSize: [38, 38],      // size of the icon
            iconAnchor: [19, 38],    // point of the icon that corresponds to marker's location
            popupAnchor: [0, -38]    // popup position relative to icon
            });


        map.zoomControl.setPosition('bottomright');
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
        }).addTo(map);

        // Add marker
        L.marker([14.092830343694615, 121.02170608402501], { icon: customIcon }).addTo(map)
            .bindPopup("Home Address")
            .openPopup();