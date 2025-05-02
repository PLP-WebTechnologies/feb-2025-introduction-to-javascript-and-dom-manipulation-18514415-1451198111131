document.addEventListener("DOMContentLoaded", () => {
    const cheroDiv = document.getElementById("chero");
    const toggleButton = document.getElementById("toggleButton");

    // Toggle the "collapsed" class on the cheroDiv
    toggleButton.addEventListener("click", () => {
        cheroDiv.classList.toggle("collapsed");
    });

    // Select the image element by its class from index.html
    const image = document.querySelector('.img2'); // Target the image with class "img2"

    // Add event listener for mouseover to flip the image
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scaleX(-1)'; // Flips the image horizontally
    });

    // Add event listener for mouseout to reset the image
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scaleX(1)'; // Resets the image to its original state
    });

    // Change text content dynamically
    const textButton = document.getElementById("textButton");
    const textElement = document.getElementById("dynamicText");
    textButton.addEventListener("click", () => {
        textElement.textContent = "The text has been changed dynamically!";
    });

    // Add or remove an element
    const addButton = document.getElementById("addButton");
    const removeButton = document.getElementById("removeButton");
    const listContainer = document.getElementById("listContainer");

    addButton.addEventListener("click", () => {
        const newItem = document.createElement("li");
        newItem.textContent = "New List Item";
        listContainer.appendChild(newItem);
    });

    removeButton.addEventListener("click", () => {
        if (listContainer.lastElementChild) {
            listContainer.removeChild(listContainer.lastElementChild);
        }
    });
});