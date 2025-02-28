
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenu = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                mobileMenu.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenu.textContent = '☰';
                    }
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Back to top button
            const backToTop = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });
            
            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Sermon Player Simulation
            const playButton = document.getElementById('play-sermon');
            const pauseButton = document.getElementById('pause-sermon');
            const sermonSlider = document.getElementById('sermon-slider');
            let sermonInterval;
            
            playButton.addEventListener('click', function() {
                playButton.disabled = true;
                pauseButton.disabled = false;
                sermonSlider.disabled = false;
                
                sermonInterval = setInterval(function() {
                    if (sermonSlider.value < 100) {
                        sermonSlider.value = parseInt(sermonSlider.value) + 1;
                    } else {
                        clearInterval(sermonInterval);
                        playButton.disabled = false;
                        pauseButton.disabled = true;
                        sermonSlider.value = 0;
                    }
                }, 1000);
            });
            
            pauseButton.addEventListener('click', function() {
                clearInterval(sermonInterval);
                playButton.disabled = false;
                pauseButton.disabled = true;
            });
            
            // Contact Form Submission
            const contactForm = document.getElementById('contactForm');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Simple validation
                if (!name || !email || !subject || !message) {
                    alert('Please fill out all fields');
                    return;
                }
                
                // In a real application, you would send this data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
            
            // Highlight current section in navigation
            const sections = document.querySelectorAll('section');
            
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.scrollY >= (sectionTop - 100)) {
                        current = section.getAttribute('id');
                    }
                });
                
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
            
            // Add simple animations for service cards
            const serviceCards = document.querySelectorAll('.service-card');
            
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
    