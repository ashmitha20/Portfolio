document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Website Loaded");
    
    
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
   
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
           
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
            
            
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
       
        const header = document.querySelector('header');
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
 
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentId = section.getAttribute('id');
                
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
 
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project, .timeline-item, .skill-tags span');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
   
    animateOnScroll();
});
document.addEventListener('DOMContentLoaded', function() {
    
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal();
    
    
    const progressBars = document.querySelectorAll('.skill-progress');
    
    function animateProgress() {
        for (let i = 0; i < progressBars.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = progressBars[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                progressBars[i].classList.add('animate');
            }
        }
    }
    
    window.addEventListener('scroll', animateProgress);
    animateProgress();
    
   
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        for (let i = 0; i < timelineItems.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = timelineItems[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                timelineItems[i].classList.add('animate');
            }
        }
    }
    
    window.addEventListener('scroll', animateTimeline);
    animateTimeline();
    
   
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
 
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
    
  
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
   
    const rippleButtons = document.querySelectorAll('.ripple-effect');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            button.style.setProperty('--x', x + 'px');
            button.style.setProperty('--y', y + 'px');
            
            button.classList.remove('active');
            void button.offsetWidth; 
            button.classList.add('active');
        });
    });
    
    const spotlightSections = document.querySelectorAll('.spotlight');
    
    spotlightSections.forEach(section => {
        section.addEventListener('mousemove', function(e) {
            const x = (e.clientX - section.getBoundingClientRect().left) / section.offsetWidth * 100;
            const y = (e.clientY - section.getBoundingClientRect().top) / section.offsetHeight * 100;
            
            section.style.setProperty('--x', x + '%');
            section.style.setProperty('--y', y + '%');
        });
    });
    
    
    if (!('ontouchstart' in window)) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'custom-cursor-follower';
        document.body.appendChild(cursorFollower);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
        
        const interactiveElements = document.querySelectorAll('a, button, .project, .timeline-item');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
                cursor.style.opacity = '0.7';
                cursorFollower.style.opacity = '0';
            });
            
            el.addEventListener('mouseleave', function() {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.opacity = '0.5';
                cursorFollower.style.opacity = '1';
            });
        });
    }
    
    const particlesContainers = document.querySelectorAll('.particles-container');
    
    particlesContainers.forEach(container => {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = 15 + Math.random() * 10;
            const moveX = -100 + Math.random() * 200;
            const moveY = -100 + Math.random() * 200;
            const moveX2 = -100 + Math.random() * 200;
            const moveY2 = -100 + Math.random() * 200;
            const moveX3 = -100 + Math.random() * 200;
            const moveY3 = -100 + Math.random() * 200;
            
            particle.style.setProperty('--x', x + '%');
            particle.style.setProperty('--y', y + '%');
            particle.style.setProperty('--duration', duration + 's');
            particle.style.setProperty('--move-x', moveX + 'px');
            particle.style.setProperty('--move-y', moveY + 'px');
            particle.style.setProperty('--move-x2', moveX2 + 'px');
            particle.style.setProperty('--move-y2', moveY2 + 'px');
            particle.style.setProperty('--move-x3', moveX3 + 'px');
            particle.style.setProperty('--move-y3', moveY3 + 'px');
            
            container.appendChild(particle);
        }
    });
    
    const splitTextElements = document.querySelectorAll('.split-text-container');
    
    splitTextElements.forEach(container => {
        const text = container.textContent.trim();
        container.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.className = 'split-text';
            span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            span.style.transitionDelay = (i * 0.05) + 's';
            container.appendChild(span);
        }
        
        const animateSplitText = function() {
            const windowHeight = window.innerHeight;
            const elementTop = container.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                const spans = container.querySelectorAll('.split-text');
                spans.forEach(span => {
                    span.classList.add('animate');
                });
            }
        };
        
        window.addEventListener('scroll', animateSplitText);
        animateSplitText();
    });
    
    
    const bubbleButtons = document.querySelectorAll('.bubble-btn');
    
    bubbleButtons.forEach(button => {
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = (Math.random() * 100) + '%';
            bubble.style.animationDelay = (Math.random() * 3) + 's';
            button.appendChild(bubble);
        }
    });
});
