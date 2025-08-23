function goHome() {
  window.location.href = "home.html";
}

function goAbout() {
  window.location.href = "about.html";
}

function goContact() {
  window.location.href = "contact.html";
}

function goBlog() {
  window.location.href = "blog.html";
}

function goservices() {
  window.location.href = "services.html";
}

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
