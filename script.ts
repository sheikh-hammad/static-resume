// Get the button and skills section elements by their IDs
let toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
let skillsSection = document.getElementById('skillsSection') as HTMLElement;

// Add an event listener to the toggle button
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        // Show the skills section
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';  // Update button text
    } else {
        // Hide the skills section
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';  // Update button text
    }
});
