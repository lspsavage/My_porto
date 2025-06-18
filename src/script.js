// Form sumbit email
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default redirect

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      successMessage.classList.remove("hidden");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form");
    }
  });
});

// Mengambil elemen cursor glow
const glow = document.getElementById("cursor-glow");
// Ukuran elemen glow (w-96 = 384px)
const size = 384;

// Menambahkan event listener untuk pergerakan mouse pada seluruh dokumen
document.addEventListener("mousemove", (e) => {
  // Mengatur properti 'left' elemen glow secara langsung
  // Kurangi setengah dari 'size' untuk memposisikan cahaya tepat di tengah kursor
  glow.style.left = `${e.clientX - size / 2}px`;

  // Mengatur properti 'top' elemen glow secara langsung
  // Karena elemen memiliki 'position: fixed', e.clientY sudah relatif terhadap viewport,
  // jadi tidak perlu menambahkan window.scrollY.
  glow.style.top = `${e.clientY - size / 2}px`;
});

// JavaScript untuk Navbar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const bars = [document.getElementById("bar1"), document.getElementById("bar2"), document.getElementById("bar3")];

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  bars[0].classList.toggle("rotate-45");
  bars[0].classList.toggle("mb-1");
  bars[1].classList.toggle("opacity-0");
  bars[2].classList.toggle("-rotate-45");
  bars[2].classList.toggle("mb-1"); // Hapus mb-1 saat ditransformasi
});

// Menutup menu saat link diklik
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (!navMenu.classList.contains("hidden")) {
      navMenu.classList.add("hidden");
      bars[0].classList.remove("rotate-45");
      bars[0].classList.add("mb-1");
      bars[1].classList.remove("opacity-0");
      bars[2].classList.remove("-rotate-45");
      bars[2].classList.add("mb-1");
    }
  });
});

// JavaScript untuk ScrollReveal
ScrollReveal().reveal(".hero-text, .hero-image", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  interval: 100,
  easing: "ease-in-out",
});

ScrollReveal().reveal("#about h2, #about p, #about .w-full > div", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  interval: 100,
  easing: "ease-in-out",
});

ScrollReveal().reveal("#projects h2, #projects .group", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  interval: 100,
  easing: "ease-in-out",
});

ScrollReveal().reveal("#contact h2, #contact p, #contact form, #contact #success-message", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  interval: 100,
  easing: "ease-in-out",
});

ScrollReveal().reveal("footer .flex, footer .my-4, footer .text-sm", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  interval: 100,
  easing: "ease-in-out",
});

// Particle.js
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#9b3dd5",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#9b3dd5",
      opacity: 0.2,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 140,
        line_linked: {
          opacity: 0.3,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Typing effect
const options = {
  strings: ["Luthfa Sobrian", "Frontend Developer", "Data Analyst"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
};

// Only enable typing effect on screens larger than 768px
if (window.innerWidth > 768) {
  new Typed("#typed-name", options);
} else {
  document.getElementById("typed-name").innerText = "Luthfa Sobrian";
}
