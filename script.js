// Get the button and skills section elements by their IDs
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skillsSection');
// Add an event listener to the toggle button
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        // Show the skills section
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills'; // Update button text
    }
    else {
        // Hide the skills section
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills'; // Update button text
    }
});
