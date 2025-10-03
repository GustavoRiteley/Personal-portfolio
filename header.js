document.addEventListener("DOMContentLoaded", function () {
    const textLeft = document.querySelector(".text-left");
    const textRight = document.querySelector(".header-right");
    const homeSection = document.getElementById('homeSection');
    const contentBodyRight = document.getElementById('contentBodyRight');
    const border = document.querySelector(".border");
    const bars = document.querySelector(".bars");

    const homeVideo = document.getElementById("homeVideo");
    const aboutVideo = document.getElementById("aboutVideo");

    const startButton = document.getElementById("startButton");
    const aboutButton = document.getElementById("aboutButton");
    const projectsButton = document.getElementById('projectsButton');
    const skillsButton = document.getElementById('skillsButton');

    const aboutSection = document.querySelector(".aboutSection");
    const aboutContent = document.querySelector(".aboutContent");
    const aboutInfo = document.querySelector(".aboutInfo");
    const projectsSection = document.getElementById('projectsSection');
    const skillsSection = document.getElementById('skillsSection');

    function showAndActivate(elements) {
        const elementsArray = Array.isArray(elements) ? elements : [elements];
        elementsArray.forEach(element => {
            if (element) {
                const isFlex = element.id === 'contentBodyRight' || element.classList.contains('aboutSection') || element.id === 'projectsSection' || element.id === 'skillsSection';

                if (isFlex) {
                    element.style.display = 'flex';
                } else {
                    element.style.display = 'block';
                }

                setTimeout(() => {
                    element.classList.add('active');
                }, 10);
            }
        });
    }

    function hideAllSections() {
        const allElements = [
            homeSection, contentBodyRight, border, bars, homeVideo,
            aboutSection, aboutContent, aboutInfo, aboutVideo,
            projectsSection,
            skillsSection,
            contactSection
        ];
        allElements.forEach(element => {
            if (element) {
                element.classList.remove('active');
                element.style.display = 'none';
            }
        });
    }

    showAndActivate([border, bars, textLeft, textRight, homeSection, contentBodyRight, homeVideo]);

    if (startButton) {
        startButton.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            showAndActivate([homeSection, contentBodyRight, border, bars, homeVideo]);
        });
    }

    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            hideAllSections();
            showAndActivate([aboutSection, aboutContent, aboutInfo, aboutVideo]);
        });
    }

    if (projectsButton) {
        projectsButton.addEventListener("click", function () {
            hideAllSections();
            showAndActivate(projectsSection);
        });
    }

    if (skillsButton) {
        skillsButton.addEventListener("click", function () {
            hideAllSections();
            showAndActivate(skillsSection);
        });
    }
    if (contactButton) {
        contactButton.addEventListener("click", function () {
            hideAllSections();
            showAndActivate(contactSection);
        })
    }
});