// Select all necessary elements
const homeNavigator = document.querySelector('.home-navigator') as HTMLElement;
const aboutNavigator = document.querySelector('.about-navigator') as HTMLElement;
const skillsNavigator = document.querySelector('.skills-navigator') as HTMLElement;
const experienceNavigator = document.querySelector('.workExperience-navigator') as HTMLElement;
const educationNavigator = document.querySelector(".education-navigator") as HTMLElement
const formNavigator = document.querySelector(".form-navigator") as HTMLElement

const homeHeadings = document.querySelector('.home-headings') as HTMLElement;
const aboutSection = document.querySelector('.about') as HTMLElement;
const skillsSection = document.querySelector('.Coding') as HTMLElement;
const experienceSection = document.querySelector('.workExperience') as HTMLElement;
const education = document.querySelector(".Education") as HTMLElement

const form = document.querySelector("#resume-form") as HTMLFormElement


// Function to hide all sections
function hideAllSections() {
    homeHeadings.style.display = 'none';
    aboutSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
    education.style.display = 'none'
    form.style.display = 'none';
}

function handleFormUpdations(){
    // event.preventDefault
    // required form inputs
let name = document.querySelector("#name") as HTMLInputElement 
let age = document.querySelector("#age") as HTMLInputElement
let address = document.querySelector("#address") as HTMLInputElement
let email = document.querySelector("#email") as HTMLInputElement
let phoneNum = document.querySelector("#phoneNum") as HTMLInputElement


// required main elements and their dynamic value.
let homeHeading1 = document.querySelector(".home-headings h1") as HTMLHeadingElement;


if (homeHeading1) {
    if(name){
        homeHeading1.textContent = `Hello, I'm ${name.value}`;

    }
}  

let homeHeadingh3 = document.querySelector(".home-headings h3") as HTMLHeadingElement


if(homeHeadingh3) {
    let field = document.querySelector(".field") as HTMLInputElement
    if(field){
        homeHeadingh3.textContent = `${field.value}`
    }
}


let aboutYouP = document.querySelector(".aboutP") as HTMLParagraphElement


if(aboutYouP) { 
    let textArea = document.querySelector(".aboutYou") as HTMLTextAreaElement
    aboutYouP.innerHTML =  textArea.value
}


// Other information's dynamic content selection
function applyEditingLogic() {
    const editableAge = document.getElementById('editable-age') as HTMLElement;
    const editableAddress = document.getElementById('editable-address') as HTMLElement;
    const editableEmail = document.getElementById('editable-email') as HTMLElement;
    const editablePhone = document.getElementById('editable-phone') as HTMLElement;

    if (editableAge) {
        editableAge.addEventListener('click', () => makeEditable(editableAge));
        editableAge.addEventListener('blur', () => saveChanges(editableAge));
    }
    
    if (editableAddress) {
        editableAddress.addEventListener('click', () => makeEditable(editableAddress));
        editableAddress.addEventListener('blur', () => saveChanges(editableAddress));
    }
    
    if (editableEmail) {
        editableEmail.addEventListener('click', () => makeEditable(editableEmail));
        editableEmail.addEventListener('blur', () => saveChanges(editableEmail));
    }
    
    if (editablePhone) {
        editablePhone.addEventListener('click', () => makeEditable(editablePhone));
        editablePhone.addEventListener('blur', () => saveChanges(editablePhone));
    }
}

// Dynamically update content and apply editing logic
let otherInformation = document.querySelector(".OtherInformation") as HTMLDivElement;

if (otherInformation) {
    if (name && age && address && email && phoneNum) {
        otherInformation.innerHTML = `
            <p id="editable-age"><span>Age</span> : ${age.value}</p>
            <p id="editable-address"><span>Address</span> : ${address.value}</p>
            <p id="editable-email"><span>Email</span> : ${email.value}</p>
            <p id="editable-phone"><span>Phone</span> : ${phoneNum.value}</p>
        `;
        // Apply the editing logic after content is updated
        applyEditingLogic();
    }
}


function applyEditingLogic2() {
    const editableQualification = document.querySelector('.Qualifications h1') as HTMLElement;
    const editableInstitute = document.querySelector('.Institutes h3') as HTMLElement;
    
    if (editableQualification) {
        editableQualification.addEventListener('click', () => makeEditable(editableQualification));
        editableQualification.addEventListener('blur', () => saveChanges(editableQualification));
    }
    
    if (editableInstitute) {
        editableInstitute.addEventListener('click', () => makeEditable(editableInstitute));
        editableInstitute.addEventListener('blur', () => saveChanges(editableInstitute));
    }
}

let Qualifications = document.querySelector(".Qualifications") as   HTMLDivElement
let Institutes = document.querySelector(".Institutes") as HTMLDivElement

// Dynamically update content and apply editing logic
if (Qualifications && Institutes) {
    let latestQualification = document.querySelector(".latestQualification") as HTMLInputElement;
    let insti = document.querySelector(".institute") as HTMLInputElement;
    
    if (latestQualification && insti) {
        Qualifications.innerHTML = `<h1>${latestQualification.value}</h1>`;
        Institutes.innerHTML = `<h3>${insti.value}</h3>`;
        
        // Apply the editing logic after content is updated
        applyEditingLogic2();
    }
}

function updateProgressBar(percentageText: string) {
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    const percentageValue = parseInt(percentageText.replace('%', ''), 10);

    if (progressBar && !isNaN(percentageValue)) {
        progressBar.style.setProperty('--width', percentageValue.toString());
    }
}

// Function to apply editing logic to newly generated content
function applyEditingLogic3() {
    const editableSkillName = document.querySelector('.nameAndPercentage p') as HTMLElement;
    const editablePercentage = document.querySelector('.percentage') as HTMLElement;

    if (editableSkillName) {
        editableSkillName.addEventListener('click', () => makeEditable(editableSkillName));
        editableSkillName.addEventListener('blur', () => saveChanges(editableSkillName));
    }

    if (editablePercentage) {
        editablePercentage.addEventListener('click', () => makeEditable(editablePercentage));
        editablePercentage.addEventListener('blur', () => saveChanges(editablePercentage));

        // Add input event to update progress bar in real-time
        editablePercentage.addEventListener('input', (event) => {
            const target = event.target as HTMLElement;
            updateProgressBar(target.innerText);
        });
    }
}
// Dynamically update content and apply editing logic
let skillContainer = document.querySelector(".first") as HTMLDivElement;

if (skillContainer) {
    let currentSkill = document.querySelector(".currentSkill") as HTMLInputElement;
    let completePercentage = document.querySelector(".completedPercentage") as HTMLInputElement;
    
    if (currentSkill && completePercentage) {
        skillContainer.innerHTML = `
            <div class="nameAndPercentage">
                <p>${currentSkill.value}</p>
                <p class="percentage">${completePercentage.value}</p>
            </div>
            <div class="progress-bar" style="--width: ${completePercentage.value}" data-label="Loading..."></div>`;
        
        // Apply the editing logic after content is updated
        applyEditingLogic3();
    }
}

function applyEditingLogic4() {
    const editableExperienceYears = document.querySelector('.experience1 h1') as HTMLElement;
    const editableExperienceDesc = document.querySelector('.experience1 h3') as HTMLElement;

    if (editableExperienceYears) {
        editableExperienceYears.addEventListener('click', () => makeEditable(editableExperienceYears));
        editableExperienceYears.addEventListener('blur', () => saveChanges(editableExperienceYears));
    }
    
    if (editableExperienceDesc) {
        editableExperienceDesc.addEventListener('click', () => makeEditable(editableExperienceDesc));
        editableExperienceDesc.addEventListener('blur', () => saveChanges(editableExperienceDesc));
    }
}

// Dynamically update content and apply editing logic
let workExperience = document.querySelector(".workExperience") as HTMLDivElement;

if (workExperience) {
    let experienceInYears = document.querySelector(".years") as HTMLInputElement;
    let experienceDesc = document.querySelector(".experienceDes") as HTMLTextAreaElement;
    
    if (experienceInYears && experienceDesc) {
        workExperience.innerHTML = `
            <h1>Experience</h1>
            <div class="experience1">
                <h1>${experienceInYears.value}</h1>
                <div class="circle"></div>
                <h3>${experienceDesc.value}</h3>
            </div>
        `;
        
        // Apply the editing logic after content is updated
        applyEditingLogic4();
    }
}

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFormUpdations();
});

// Function to show specific section
function showSection(section: HTMLElement, displayType: string) {
    hideAllSections();
    section.style.display = displayType;
}

// Event listeners for navigation buttons
if(homeNavigator){
    homeNavigator.addEventListener('click', () => showSection(homeHeadings, 'flex'));
}

if(aboutNavigator){
    aboutNavigator.addEventListener('click', () => showSection(aboutSection, 'block'));

}

if(skillsNavigator){
    skillsNavigator.addEventListener('click', () => showSection(skillsSection, 'flex'));

}
if(experienceNavigator){
    experienceNavigator.addEventListener('click', () => showSection(experienceSection, 'block'));

}
if(educationNavigator){
    educationNavigator.addEventListener('click', () => showSection(education, 'block'));

}


function makeEditable(element: HTMLElement) {
    element.contentEditable = "true";
    element.focus();
}

// Function to save the changes when focus is lost
function saveChanges(element: HTMLElement) {
    element.contentEditable = "false";
    if (element.id === 'editable-percentage') {
        updateProgressBar(element.innerText);
    }
}

function updateProgressBar(percentageText: string) {
    const progressBar = document.getElementById('editable-progress-bar') as HTMLElement;
    const percentageValue = parseInt(percentageText.replace('%', ''), 10);

    if (progressBar && !isNaN(percentageValue)) {
        progressBar.style.setProperty('--width', percentageValue.toString());
    }
}

// Adding event listeners to make the things editable on click
const editableName = document.getElementById('editable-name') as HTMLElement;
const editableTitle = document.getElementById('editable-title') as HTMLElement;
const editableAboutTitle = document.getElementById("editable-about-para") as HTMLParagraphElement;
const editableAge = document.getElementById('editable-age') as HTMLElement;
const editableResidence = document.getElementById('editable-residence') as HTMLElement;
const editableAddress = document.getElementById('editable-address') as HTMLElement;
const editableEmail = document.getElementById('editable-email') as HTMLElement;
const editablePhone = document.getElementById('editable-phone') as HTMLElement;
const editableIntermediate = document.getElementById('editable-intermediate') as HTMLElement;
const editableMatriculation = document.getElementById('editable-matriculation') as HTMLElement;
const editableCollege = document.getElementById('editable-college') as HTMLElement;
const editableSchool = document.getElementById('editable-school') as HTMLElement;
const editableSkillName = document.getElementById('editable-skill-name') as HTMLElement;
const editablePercentage = document.getElementById('editable-percentage') as HTMLElement;
const editableExperienceTitle = document.getElementById('editable-experience-title') as HTMLElement;
const editableDates = document.getElementById('editable-dates') as HTMLElement;
const editableDescription = document.getElementById('editable-description') as HTMLElement;

editableName.addEventListener('click', () => makeEditable(editableName));
editableTitle.addEventListener('click', () => makeEditable(editableTitle));
editableAboutTitle.addEventListener('click', () => makeEditable(editableAboutTitle));


// Adding event listeners to save the changes when the user clicks outside the element
editableName.addEventListener('blur', () => saveChanges(editableName));
editableTitle.addEventListener('blur', () => saveChanges(editableTitle));
editableAboutTitle.addEventListener('blur', () => saveChanges(editableAboutTitle));

if (editableAge && editableResidence && editableAddress && editableEmail && editablePhone) {
    editableAge.addEventListener('click', () => makeEditable(editableAge));
    editableResidence.addEventListener('click', () => makeEditable(editableResidence));
    editableAddress.addEventListener('click', () => makeEditable(editableAddress));
    editableEmail.addEventListener('click', () => makeEditable(editableEmail));
    editablePhone.addEventListener('click', () => makeEditable(editablePhone));

    editableAge.addEventListener('blur', () => saveChanges(editableAge));
    editableResidence.addEventListener('blur', () => saveChanges(editableResidence));
    editableAddress.addEventListener('blur', () => saveChanges(editableAddress));
    editableEmail.addEventListener('blur', () => saveChanges(editableEmail));
    editablePhone.addEventListener('blur', () => saveChanges(editablePhone));
} else {
    console.error('One or more elements not found.');
}

if (editableIntermediate && editableMatriculation && editableCollege && editableSchool) {
    editableIntermediate.addEventListener('click', () => makeEditable(editableIntermediate));
    editableMatriculation.addEventListener('click', () => makeEditable(editableMatriculation));
    editableCollege.addEventListener('click', () => makeEditable(editableCollege));
    editableSchool.addEventListener('click', () => makeEditable(editableSchool));

    editableIntermediate.addEventListener('blur', () => saveChanges(editableIntermediate));
    editableMatriculation.addEventListener('blur', () => saveChanges(editableMatriculation));
    editableCollege.addEventListener('blur', () => saveChanges(editableCollege));
    editableSchool.addEventListener('blur', () => saveChanges(editableSchool));
} else {
    console.error('One or more elements not found.');
}
if (editableSkillName && editablePercentage) {
    editableSkillName.addEventListener('click', () => makeEditable(editableSkillName));
    editablePercentage.addEventListener('click', () => makeEditable(editablePercentage));

    editableSkillName.addEventListener('blur', () => saveChanges(editableSkillName));
    editablePercentage.addEventListener('blur', () => saveChanges(editablePercentage));
} else {
    console.error('One or more elements not found.');
}


if (editableExperienceTitle && editableDates && editableDescription) {
    editableExperienceTitle.addEventListener('click', () => makeEditable(editableExperienceTitle));
    editableDates.addEventListener('click', () => makeEditable(editableDates));
    editableDescription.addEventListener('click', () => makeEditable(editableDescription));

    editableExperienceTitle.addEventListener('blur', () => saveChanges(editableExperienceTitle));
    editableDates.addEventListener('blur', () => saveChanges(editableDates));
    editableDescription.addEventListener('blur', () => saveChanges(editableDescription));
} else {
    console.error('One or more elements not found.');
}

// This will show the  home headings by default on page load

window.addEventListener('DOMContentLoaded', () => showSection(form, 'flex'));
