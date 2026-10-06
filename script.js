/* ==========================================
   RITWIK CHERUKULA - PORTFOLIO JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       COPYRIGHT YEAR
       ============================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ==============================
       SCROLL PROGRESS
       ============================== */

    const progressBar = document.createElement("div");

    progressBar.className = "scroll-progress";

    document.body.prepend(progressBar);


    function updateProgress() {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width = `${progress}%`;
    }


    window.addEventListener("scroll", updateProgress);

    updateProgress();


    /* ==============================
       NAVBAR SCROLL EFFECT
       ============================== */

    const navbar = document.querySelector(".navbar");


    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }
    }


    window.addEventListener("scroll", updateNavbar);


    /* ==============================
       SCROLL REVEAL
       ============================== */

    const revealElements = document.querySelectorAll(
        ".section-title, .section-label, .about-content, .education-card"
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* ==============================
       SKILLS ANIMATION
       ============================== */

    const skills = document.querySelectorAll(".skill");


    const skillObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    skills.forEach((skill, index) => {

                        setTimeout(() => {

                            skill.classList.add("show");

                        }, index * 100);

                    });

                    skillObserver.disconnect();

                }

            });

        },

        {
            threshold: 0.2
        }

    );


    const skillsSection =
        document.querySelector(".skills-grid");


    if (skillsSection) {

        skillObserver.observe(skillsSection);

    }


    /* ==============================
       PROJECT ANIMATION
       ============================== */

    const projects =
        document.querySelectorAll(".project-card");


    const projectObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    projects.forEach((project, index) => {

                        setTimeout(() => {

                            project.classList.add("show");

                        }, index * 150);

                    });

                    projectObserver.disconnect();

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    const projectGrid =
        document.querySelector(".projects-grid");


    if (projectGrid) {

        projectObserver.observe(projectGrid);

    }


    /* ==============================
       ACTIVE NAVIGATION
       ============================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll("nav a");


    function updateActiveNav() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    /* ==============================
       PROJECT CARD 3D TILT
       ============================== */

    projects.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* ==============================
       BACK TO TOP BUTTON
       ============================== */

    const backButton =
        document.createElement("button");

    backButton.className = "back-to-top";

    backButton.innerHTML = "↑";

    backButton.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(backButton);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            backButton.classList.add("show");

        } else {

            backButton.classList.remove("show");

        }

    });


    backButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==============================
       SMOOTH NAVIGATION
       ============================== */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});