// Inicializar Particles.js con configuraciones personalizadas para móvil
particlesJS("particles-js", {
    particles: {
        number: {
            value: window.innerWidth > 768 ? 150 : 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ccff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ccff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Smooth Scroll to Section with Transition Effect
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    // Desplazar suavemente hacia la sección
    section.scrollIntoView({ behavior: 'smooth' });
};

// Aplicar el efecto a los botones con la clase data-scroll
document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-scroll');
        scrollToSection(sectionId);
    });
});

// Añadir las clases de transición para cada sección visible al hacer scroll
const sections = document.querySelectorAll('section');

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * 0.8) {
            section.classList.add('section-visible');
        }
    });
};

// Ejecutar revealSections al cargar la página y al hacer scroll
window.addEventListener('DOMContentLoaded', revealSections);
window.addEventListener('scroll', revealSections);

document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const skillLevel = bar.getAttribute('data-skill-level');
                bar.style.width = skillLevel + '%';
                observer.unobserve(bar); // Dejar de observar una vez que la animación se ha ejecutado
            }
        });
    }, {
        threshold: 0.2
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});


// Funcionalidad para descargar el CV
document.getElementById('download-cv-btn').addEventListener('click', () => {
    const cvLink = "assets/Froylan_Rendon_CV.pdf";
    window.location.href = cvLink;
});

// Validar el Formulario de Contacto con Real-time Feedback
const validateForm = () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let isValid = true;

    // Validar Nombre
    if (name.value.trim() !== "") {
        name.parentElement.classList.add("valid");
        document.getElementById("name-icon").style.opacity = "1";
    } else {
        name.parentElement.classList.remove("valid");
        document.getElementById("name-icon").style.opacity = "0";
        isValid = false;
    }

    // Validar Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value.trim())) {
        email.parentElement.classList.add("valid");
        document.getElementById("email-icon").style.opacity = "1";
    } else {
        email.parentElement.classList.remove("valid");
        document.getElementById("email-icon").style.opacity = "0";
        isValid = false;
    }

    // Validar Mensaje
    if (message.value.trim() !== "") {
        message.parentElement.classList.add("valid");
        document.getElementById("message-icon").style.opacity = "1";
    } else {
        message.parentElement.classList.remove("valid");
        document.getElementById("message-icon").style.opacity = "0";
        isValid = false;
    }

    return isValid;
};

// Envío del Formulario con Spinner de Carga
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        // Mostrar spinner
        const spinner = document.getElementById('loading-spinner');
        spinner.style.display = 'block';

        // Simulación de tiempo de envío
        setTimeout(() => {
            alert('Thank you! Your message has been sent.');
            spinner.style.display = 'none';
            contactForm.reset();

            // Ocultar iconos de verificación después de resetear
            document.querySelectorAll('.form-icon').forEach(icon => {
                icon.style.opacity = '0';
            });
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('valid');
            });
        }, 2000);
    }
});

