// Function to initialize the gallery
function initializeGallery() {
    console.log("Page loaded - Initializing gallery");

    // Select all images
    let images = document.querySelectorAll(".grid img");

    // Loop through each image
    for (let i = 0; i < images.length; i++) {
        // Add event listeners for mouse events
        images[i].addEventListener("mouseover", function() {
            console.log("Mouse over: " + this.alt);
            this.style.transform = "scale(1.1)";
        });

        images[i].addEventListener("mouseleave", function() {
            console.log("Mouse leave: " + this.alt);
            this.style.transform = "scale(1)";
        });

        // Add event listeners for keyboard focus events
        images[i].addEventListener("focus", function() {
            console.log("Focused on: " + this.alt);
            this.style.border = "3px solid #007BFF";
        });

        images[i].addEventListener("blur", function() {
            console.log("Blur event: " + this.alt);
            this.style.border = "none";
        });

        // Ensure images have tabindex for accessibility
        images[i].setAttribute("tabindex", "0");
    }
}
