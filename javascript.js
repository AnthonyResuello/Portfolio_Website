// Get modal elements
const modal = document.getElementById("projectModal");
const modalVideo = document.getElementById("modalVideo");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");

// Add click events to all "View" buttons
const viewButtons = document.querySelectorAll(".view_project");

viewButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const projectCard = e.target.closest(".project_card"); // find the parent project
    const videoSrc = projectCard.getAttribute("data-video"); // get video path
    const title = projectCard.querySelector(".top_section h2").innerText; // project title
    const description =
      projectCard.querySelector(".bottom_section p").innerText; // description

    // Update modal content
    modalVideo.src = videoSrc;
    modalTitle.innerText = title;
    modalDescription.innerText = description;

    // Show modal
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.pause(); // pause video when closing
});

// Optional: close modal by clicking outside
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalVideo.pause();
  }
});
