// Select the elements
var arrowDown = document.getElementById("arrow-down");
var skillsSection = document.getElementById("skills-section");
// Add click event listener to the up arrow
arrowDown.addEventListener("click", function () {
    // Hide the skills section and down arrow
    if ((skillsSection.style.display === "block")) {
        skillsSection.style.display = "none";
    }
    else if (skillsSection.style.display === "none") {
        skillsSection.style.display = 'block';
    }
    // arrowDown.style.display = "none";
});
