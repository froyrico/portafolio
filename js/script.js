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

// Initialize Particles.js with custom settings for mobile
particlesJS("particles-js", {
    particles: {
        number: {
            value: window.innerWidth > 768 ? 150 : 80,  // Reduce number of particles on mobile
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