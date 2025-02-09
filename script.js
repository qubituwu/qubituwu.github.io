document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");
});


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// The text you want to reveal
const text = "Qubits, or quantum bits, are the fundamental units of quantum computing that exist in a superposition of both 0 and 1 simultaneously, unlike classical bits which are either 0 or 1. This property, along with entanglement and quantum interference, allows quantum computers to perform complex calculations much faster than traditional computers.";

// Get the element to insert the text into
const typingTextElement = document.getElementById("typing-text");

let index = 0;

// Function to type the text
function typeText() {
  if (index < text.length) {
    typingTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust the speed here (100ms between characters)
  }
}

// Start the typing effect after the page loads
window.onload = function() {
  typeText();
};
