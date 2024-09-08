"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Select all necessary elements
const homeNavigator = document.querySelector('.home-navigator');
const aboutNavigator = document.querySelector('.about-navigator');
const skillsNavigator = document.querySelector('.skills-navigator');
const experienceNavigator = document.querySelector('.workExperience-navigator');
const educationNavigator = document.querySelector(".education-navigator");
const formNavigator = document.querySelector(".form-navigator");
const homeHeadings = document.querySelector('.home-headings');
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.Coding');
const experienceSection = document.querySelector('.workExperience');
const education = document.querySelector(".Education");
const form = document.querySelector("#resume-form");
// Function to hide all sections
function hideAllSections() {
    homeHeadings.style.display = 'none';
    aboutSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
    education.style.display = 'none';
    form.style.display = 'none';
}
function handleFormUpdations() {
    // event.preventDefault
    // required form inputs
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let address = document.querySelector("#address");
    let email = document.querySelector("#email");
    let phoneNum = document.querySelector("#phoneNum");
    // required main elements and their dynamic value.
    let homeHeading1 = document.querySelector(".home-headings h1");
    console.log(homeHeading1);
    if (homeHeading1) {
        if (name) {
            homeHeading1.textContent = `Hello, I'm ${name.value}`;
        }
    }
    let homeHeadingh3 = document.querySelector(".home-headings h3");
    console.log(homeHeadingh3);
    if (homeHeadingh3) {
        let field = document.querySelector(".field");
        if (field) {
            homeHeadingh3.textContent = `${field.value}`;
        }
    }
    let aboutYouP = document.querySelector(".aboutP");
    console.log(aboutYouP);
    if (aboutYouP) {
        let textArea = document.querySelector(".aboutYou");
        aboutYouP.innerHTML = textArea.value;
    }
    let otherInformation = document.querySelector(".OtherInformation");
    console.log(otherInformation);
    if (otherInformation) {
        if (name && age && address && email && phoneNum) {
            otherInformation.innerHTML = `<p><span>Age</span> : ${age.value}</p>
                        <p><span>Address</span> : ${address.value}</p>
                        <p><span>Email</span> : ${email.value}</p>
                        <p><span>Phone</span> : ${phoneNum.value}</p>`;
        }
    }
    let Qualifications = document.querySelector(".Qualifications");
    let Institutes = document.querySelector(".Institutes");
    console.log(Qualifications, Institutes);
    if (Qualifications && Institutes) {
        let latestQualification = document.querySelector(".latestQualification");
        let insti = document.querySelector(".institute");
        if (latestQualification && insti) {
            Qualifications.innerHTML = `<h1>${latestQualification.value}</h1>`;
            Institutes.innerHTML = `<h3>${insti.value}</h3>`;
        }
    }
    let skillContainer = document.querySelector(".first");
    console.log(skillContainer);
    if (skillContainer) {
        let currentSkill = document.querySelector(".currentSkill");
        let completePercentage = document.querySelector(".completedPercentage");
        if (currentSkill && completePercentage) {
            skillContainer.innerHTML = `<div class="first">
                            <div class="nameAndPercentage">
                                <p>${currentSkill.value}</p>
                                <p class="percentage">${completePercentage.value}</p>
                            </div>
                            <div class="progress-bar" style="--width: ${completePercentage.value}" data-label="Loading..."></div>
                        </div>`;
        }
    }
    let workExperience = document.querySelector(".workExperience");
    console.log(workExperience);
    if (workExperience) {
        let experienceInYears = document.querySelector(".years");
        let experienceDesc = document.querySelector(".experienceDes");
        if (experienceDesc && experienceInYears) {
            workExperience.innerHTML = `<h1>Experience</h1>
                    <div class="experience1">
                        <h1>${experienceInYears.value}</h1>
                        <div class="circle"></div>
                        
                            <h3>${experienceDesc.value}</h3>`;
        }
    }
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFormUpdations();
});
// Function to show specific section
function showSection(section, displayType) {
    hideAllSections();
    section.style.display = displayType;
}
// Event listeners for navigation buttons
if (homeNavigator) {
    homeNavigator.addEventListener('click', () => showSection(homeHeadings, 'flex'));
}
if (aboutNavigator) {
    aboutNavigator.addEventListener('click', () => showSection(aboutSection, 'block'));
}
if (skillsNavigator) {
    skillsNavigator.addEventListener('click', () => showSection(skillsSection, 'flex'));
}
if (experienceNavigator) {
    experienceNavigator.addEventListener('click', () => showSection(experienceSection, 'block'));
}
if (educationNavigator) {
    educationNavigator.addEventListener('click', () => showSection(education, 'block'));
}
if (formNavigator) {
    formNavigator.addEventListener('click', () => showSection(form, "flex"));
}
// This will show the  home headings by default on page load
// window.addEventListener('DOMContentLoaded', () => showSection(homeHeadings, 'flex'));
window.addEventListener('DOMContentLoaded', () => showSection(form, 'flex'));
