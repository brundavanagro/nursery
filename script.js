document.addEventListener('DOMContentLoaded', () => {
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initial check in case page is loaded already scrolled
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // Form submission via WhatsApp
    const inquiryForm = document.getElementById('inquiryForm');
    
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const crop = document.getElementById('crop').value;
        const quantity = document.getElementById('quantity').value;
        const location = document.getElementById('location').value;
        
        // Construct WhatsApp message
        let message = `*New Inquiry from Website*%0A%0A`;
        message += `*Name:* ${name}%0A`;
        message += `*Mobile:* ${mobile}%0A`;
        message += `*Location:* ${location}%0A`;
        message += `*Crop Needed:* ${crop}%0A`;
        message += `*Quantity:* ${quantity} saplings`;
        
        // WhatsApp number of Siddhu
        const phoneNumber = "917042999143";
        
        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Optional: Reset form after submission
        inquiryForm.reset();
    });
    
    // Add simple reveal animation on scroll for product cards
    const productCards = document.querySelectorAll('.product-card, .feature-item, .stat-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    productCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        observer.observe(card);
    });
});
