



document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".question");
  
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
  
        // Close all open items
        faqItems.forEach(i => i.classList.remove("active"));
  
        // Toggle the clicked item
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  });




  