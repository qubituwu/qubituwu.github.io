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
document.addEventListener("DOMContentLoaded", function() {
  typeText();
});



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const popups = document.querySelectorAll(".popup");

  cards.forEach(card => {
      card.addEventListener("click", () => {
          const popupId = card.getAttribute("data-popup");
          const popup = document.getElementById(popupId);
          if (popup) {
              popup.style.display = "block";
              popup.style.visibility = "visible";
          }
      });
  });

  popups.forEach(popup => {
      popup.querySelector(".close-btn").addEventListener("click", () => {
          popup.style.display = "none";
          popup.style.visibility = "hidden";
      });
  });
});



// Function to make modals draggable
function makeDraggable(modalId, headerId) {
  const modal = document.getElementById(modalId);
  const header = document.getElementById(headerId);
  let offsetX, offsetY, isDragging = false;

  header.onmousedown = (e) => {
      isDragging = true;
      offsetX = e.clientX - modal.offsetLeft;
      offsetY = e.clientY - modal.offsetTop;
      document.onmousemove = (e) => {
          if (isDragging) {
              modal.style.left = `${e.clientX - offsetX}px`;
              modal.style.top = `${e.clientY - offsetY}px`;
          }
      };
      document.onmouseup = () => {
          isDragging = false;
          document.onmousemove = null;
          document.onmouseup = null;
      };
  };
}

// Function to open modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Adding event listeners for the modal triggers (cards)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
      const modalId = this.getAttribute('data-popup');
      openModal(modalId);
  });
});

// Adding event listeners for the close buttons inside modals
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function() {
      const modal = this.closest('.popup');
      closeModal(modal.id);
  });
});

// Make modals draggable when they are opened
window.onload = () => {
  // List of all modal IDs and their respective header IDs
  const modals = [
      { modalId: 'popup-edu', headerId: 'popup-edu-header' },
      { modalId: 'popup-skills', headerId: 'popup-skills-header' },
      { modalId: 'popup-experience', headerId: 'popup-experience-header' },
      { modalId: 'popup-projects', headerId: 'popup-projects-header' },
      { modalId: 'popup-pd', headerId: 'popup-pd-header' },
      { modalId: 'popup-orgs', headerId: 'popup-orgs-header' },
  ];

  // Apply draggable functionality to each modal
  modals.forEach(modal => {
      makeDraggable(modal.modalId, modal.headerId);
  });
};
