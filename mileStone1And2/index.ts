// Select all necessary elements
const homeNavigator = document.querySelector('.home-navigator') as HTMLElement;
const aboutNavigator = document.querySelector('.about-navigator') as HTMLElement;
const skillsNavigator = document.querySelector('.skills-navigator') as HTMLElement;
const experienceNavigator = document.querySelector('.workExperience-navigator') as HTMLElement;

const homeHeadings = document.querySelector('.home-headings') as HTMLElement;
const aboutSection = document.querySelector('.about') as HTMLElement;
const skillsSection = document.querySelector('.Coding') as HTMLElement;
const experienceSection = document.querySelector('.workExperience') as HTMLElement;

// Function to hide all sections
function hideAllSections() {
    homeHeadings.style.display = 'none';
    aboutSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
}

// Function to show specific section
function showSection(section: HTMLElement, displayType: string) {
    hideAllSections();
    section.style.display = displayType;
}

// Event listeners for navigation buttons
homeNavigator.addEventListener('click', () => showSection(homeHeadings, 'flex'));
aboutNavigator.addEventListener('click', () => showSection(aboutSection, 'block'));
skillsNavigator.addEventListener('click', () => showSection(skillsSection, 'flex'));
experienceNavigator.addEventListener('click', () => showSection(experienceSection, 'block'));

// Show the home headings by default on page load
window.addEventListener('DOMContentLoaded', () => showSection(homeHeadings, 'flex'));
