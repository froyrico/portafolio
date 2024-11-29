function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function downloadCV() {
    alert("Download CV button clicked!");
}

// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ffcc"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
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
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffcc",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
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
const projects = [
    {
        title: "Maintenance Planner",
        description: "A mobile application built with React Native to help users schedule and track maintenance tasks.",
        technologies: ["React Native", "Expo", "SQLite"],
        screenshots: ["assets/maintenance-planner-1.png", "assets/maintenance-planner-2.png"]
    },
    {
        title: "Real-time Chat App",
        description: "A chat application with real-time messaging capabilities using Firebase.",
        technologies: ["Firebase", "JavaScript", "HTML/CSS"],
        screenshots: ["assets/chat-app-1.png", "assets/chat-app-2.png"]
    },
    {
        title: "Interactive Dashboard",
        description: "A real-time data visualization dashboard built with Node.js and D3.js.",
        technologies: ["Node.js", "D3.js", "Express"],
        screenshots: ["assets/dashboard-1.png", "assets/dashboard-2.png"]
    },
    {
        title: "Collaborative To-Do List",
        description: "A to-do application with user roles and authentication.",
        technologies: ["React", "Node.js", "MongoDB"],
        screenshots: ["assets/todo-1.png", "assets/todo-2.png"]
    }
];

// Open Modal with Project Details
function openModal(index) {
    const modal = document.getElementById("project-modal");
    const project = projects[index - 1];

    // Update Modal Content
    document.getElementById("modal-title").innerText = project.title;
    document.getElementById("modal-description").innerText = project.description;
    
    // Update Technologies
    const techList = document.getElementById("modal-tech");
    techList.innerHTML = ""; // Clear previous content
    project.technologies.forEach(tech => {
        const li = document.createElement("li");
        li.innerText = tech;
        techList.appendChild(li);
    });

    // Update Screenshots
    const screenshotsDiv = document.getElementById("modal-screenshots");
    screenshotsDiv.innerHTML = ""; // Clear previous content
    project.screenshots.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${project.title} Screenshot`;
        screenshotsDiv.appendChild(img);
    });

    // Show Modal
    modal.style.display = "block";
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
}

// Validate Contact Form
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return false;
    }

    // Basic email validation
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Download CV
function downloadCV() {
    // Replace with the actual CV file path
    const cvLink = "assets/Froylan_Rendon_CV.pdf";
    window.location.href = cvLink;
}
