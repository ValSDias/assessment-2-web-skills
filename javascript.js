
document.querySelector("button[onclick=\"filterGallery('all')\"]")
  .addEventListener("click", function () {
    let items = document.querySelectorAll(".galleryitem");
    items.forEach(item => {
      if (true) {   // always true → show everything
        item.style.display = "block";
      }
    });
  });

document.querySelector("button[onclick=\"filterGallery('commercial')\"]")
  .addEventListener("click", function () {
    let items = document.querySelectorAll(".galleryitem");
    items.forEach(item => {
      if (item.classList.contains("commercial")) {
        item.style.display = "block";
      }
      if (!item.classList.contains("commercial")) {
        item.style.display = "none";
      }
    });
  });

document.querySelector("button[onclick=\"filterGallery('home')\"]")
  .addEventListener("click", function () {
    let items = document.querySelectorAll(".galleryitem");
    items.forEach(item => {
      if (item.classList.contains("home")) {
        item.style.display = "block";
      }
      if (!item.classList.contains("home")) {
        item.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById("contactForm");

      form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! Your message has been submitted.");
      });
    });

document.addEventListener("DOMContentLoaded", function() {
    let testimonials = document.querySelectorAll(".testimonial, .testimonialactive");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");

    let current = 0;
    

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.remove("testimonialactive");
            t.style.display = "none";
        });
        testimonials[index].classList.add("testimonialactive");
        testimonials[index].style.display = "block";
    }

    showTestimonial(current);

    nextBtn.addEventListener("click", function() {
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
    });

    prevBtn.addEventListener("click", function() {
        current = (current - 1 + testimonials.length) % testimonials.length;
        showTestimonial(current);
    });
});