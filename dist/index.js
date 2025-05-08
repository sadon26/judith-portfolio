// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

// Submit form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`Message:\n${message}`);

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=judithoriabure2020@gmail.com&su=${subject}&body=${body}`;

  const aLink = document.createElement("a");
  aLink.href = mailtoLink;
  aLink.target = "_blank";
  // Open mail client
  aLink.click();
});
