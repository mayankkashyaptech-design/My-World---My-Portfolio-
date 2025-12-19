 document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      card.classList.toggle("active");
      
      button.textContent = card.classList.contains("active")
      ? "View Less"
      : "View More";
    });
  });