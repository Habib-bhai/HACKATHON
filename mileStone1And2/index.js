"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// Select all necessary elements
const homeNavigator = document.querySelector('.home-navigator');
const aboutNavigator = document.querySelector('.about-navigator');
const skillsNavigator = document.querySelector('.skills-navigator');
const experienceNavigator = document.querySelector('.workExperience-navigator');
const homeHeadings = document.querySelector('.home-headings');
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.Coding');
const experienceSection = document.querySelector('.workExperience');
// Function to hide all sections
function hideAllSections() {
    homeHeadings.style.display = 'none';
    aboutSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
}
// Function to show specific section
function showSection(section, displayType) {
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
