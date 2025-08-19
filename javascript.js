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

function showAll() {
  let items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.style.display = 'block';
  });
}

function showCommercial() {
  let items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (item.classList.contains('commercial')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function showHome() {
  let items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (item.classList.contains('home')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}