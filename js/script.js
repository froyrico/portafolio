// Smooth Scroll to Section
const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-scroll');
        scrollToSection(sectionId);
    });
});

// Download CV Functionality
document.getElementById('download-cv-btn').addEventListener('click', () => {
    const cvLink = "assets/Froylan_Rendon_CV.pdf";
    window.location.href = cvLink;
});

// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Adjusted number of particles for a less cluttered look
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ccff" // Changed to match the color of the text "Froylan Rendon"
        },
        shape: {
            type: ["circle", "polygon"], // Changed to a mix of circle and polygon for an organic look
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 6 // Changed to give a more organic/spore-like appearance
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1.5, // Added a gentle animation to simulate spores pulsating
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 6,
            random: true,
            anim: {
                enable: true,
                speed: 4, // Added size animation for a more organic effect
                size_min: 2,
                sync: false
            }
        },
        line_linked: {
            enable: false // Disabled lines for a more organic/spore-like appearance
        },
        move: {
            enable: true,
            speed: 2, // Reduced speed for a calmer floating effect
            direction: "none",
            random: true,
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
                mode: "bubble" // Changed to "bubble" for a more interactive, organic feel
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
                distance: 200,
                size: 10,
                duration: 2,
                opacity: 0.8,
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

// Project Data
const projects = {
    frontEnd: [
        {
            title: "Interactive Dashboard",
            description: "A real-time data visualization dashboard built with React and D3.js.",
            image: "assets/dashboard-1.png"
        },
        {
            title: "Responsive Portfolio Website",
            description: "A personal portfolio website created with HTML, CSS, and JavaScript, focusing on responsive design.",
            image: "assets/portfolio.png"
        }
    ],
    backEnd: [
        {
            title: "Real-time Chat App",
            description: "A chat application with real-time messaging capabilities using Firebase and Node.js.",
            image: "assets/chat-app-1.png"
        },
        {
            title: "Collaborative To-Do List",
            description: "A to-do application with user roles and authentication, built with React and Node.js.",
            image: "assets/todo-1.png"
        }
    ],
    dataMl: [
        {
            title: "Sales Analysis Dashboard",
            description: "A PowerBI dashboard providing insights on sales data, trends, and KPIs.",
            image: "assets/sales-dashboard.png"
        },
        {
            title: "Machine Learning Model Deployment",
            description: "Deployment of a predictive model using Google AI Platform and Flask for the API.",
            image: "assets/ml-deployment.png"
        }
    ]
};

// Load Projects into HTML
const loadProjects = () => {
    const categories = Object.keys(projects);
    categories.forEach(category => {
        const categoryContainer = document.querySelector(`.projects-category.${category} .project-gallery`);
        projects[category].forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <img src="${project.image}" alt="${project.title} Screenshot">
            `;
            categoryContainer.appendChild(projectCard);
        });
    });
};

document.addEventListener('DOMContentLoaded', loadProjects);

// Validate Contact Form
const validateForm = () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return false;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
};

// Validate Contact Form with Real-time Feedback
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});

const showError = (input, message) => {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    let error = formGroup.querySelector('.error-message');
    if (!error) {
        error = document.createElement('small');
        error.className = 'error-message';
        formGroup.appendChild(error);
    }
    error.textContent = message;
};

const clearError = (input) => {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const error = formGroup.querySelector('.error-message');
    if (error) {
        formGroup.removeChild(error);
    }
};