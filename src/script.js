// Form sumbit email
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (form && successMessage) {
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
}

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

ScrollReveal().reveal("#education h2, #education p, #education .w-full > div", {
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
const typedTarget = document.getElementById("typed-name");
const options = {
  strings: ["Luthfa Sobrian", "Frontend Developer", "Data Analyst"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
};

if (typedTarget) {
  if (window.innerWidth > 768) {
    new Typed("#typed-name", options);
  } else {
    typedTarget.innerText = options.strings[0];
  }
}
// Card hover effect for Education section
document.querySelectorAll(".edu-card").forEach((card) => {
  const beforeEl = card.querySelector(".card-before");
  const glowEl = card.querySelector(".card-glow");

  card.addEventListener("mouseenter", () => {
    beforeEl.style.opacity = 1;
    glowEl.style.opacity = 1;
  });
  card.addEventListener("mouseleave", () => {
    beforeEl.style.opacity = 0;
    glowEl.style.opacity = 0;
  });
  card.addEventListener("focusin", () => {
    beforeEl.style.opacity = 1;
    glowEl.style.opacity = 1;
  });
  card.addEventListener("focusout", () => {
    beforeEl.style.opacity = 0;
    glowEl.style.opacity = 0;
  });
});

// Filtering for the Project page buttons/cards
const projectFilterButtons = document.querySelectorAll("[data-project-filter]");
const filterableProjectCards = document.querySelectorAll("[data-project-category]");
const projectGrid = document.getElementById("project-grid");

if (projectFilterButtons.length && filterableProjectCards.length) {
  const activeFilterClasses = ["ring-2", "ring-purple-400/60", "ring-offset-2", "ring-offset-[#0f0f0f]"];
  const gridFadeClasses = ["opacity-0", "-translate-y-2", "pointer-events-none"];
  let filterTimeoutId = null;
  let releaseTimeoutId = null;
  let currentFilter = null;

  const setActiveButton = (activeButton) => {
    projectFilterButtons.forEach((button) => {
      button.classList.remove(...activeFilterClasses);
      button.setAttribute("aria-pressed", button === activeButton ? "true" : "false");
    });
    activeButton.classList.add(...activeFilterClasses);
  };

  const filterProjects = (filter) => {
    const normalizedFilter = (filter || "all").toLowerCase();
    filterableProjectCards.forEach((card) => {
      const categories = card.dataset.projectCategory
        .split(",")
        .map((cat) => cat.trim().toLowerCase())
        .filter(Boolean);
      const shouldShow = normalizedFilter === "all" || categories.includes(normalizedFilter);
      card.classList.toggle("hidden", !shouldShow);
    });
  };

  const runFilterWithAnimation = (filter, animate = true) => {
    const normalizedFilter = (filter || "all").toLowerCase();
    const applyFilter = () => {
      filterProjects(normalizedFilter);
      currentFilter = normalizedFilter;
    };

    if (!projectGrid || !animate) {
      applyFilter();
      return;
    }

    if (filterTimeoutId) clearTimeout(filterTimeoutId);
    if (releaseTimeoutId) clearTimeout(releaseTimeoutId);

    projectGrid.classList.add(...gridFadeClasses);

    filterTimeoutId = setTimeout(() => {
      applyFilter();
      requestAnimationFrame(() => {
        projectGrid.classList.remove(...gridFadeClasses);
        releaseTimeoutId = setTimeout(() => {
          filterTimeoutId = null;
          releaseTimeoutId = null;
        }, 300);
      });
    }, 200);
  };

  projectFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.projectFilter;
      setActiveButton(button);
      runFilterWithAnimation(selectedFilter, currentFilter !== null);
    });
  });

  const defaultButton =
    Array.from(projectFilterButtons).find((btn) => btn.dataset.default === "true") ||
    projectFilterButtons[0];

  if (defaultButton) {
    setActiveButton(defaultButton);
    runFilterWithAnimation(defaultButton.dataset.projectFilter, false);
  }
}

document.querySelectorAll(".project-card").forEach((card) => {
  const beforeEl = card.querySelector(".project-before");
  const glowEl = card.querySelector(".project-glow");

  card.addEventListener("mouseenter", () => {
    beforeEl.style.opacity = 1;
    glowEl.style.opacity = 1;
  });
  card.addEventListener("mouseleave", () => {
    beforeEl.style.opacity = 0;
    glowEl.style.opacity = 0;
  });
  card.addEventListener("focusin", () => {
    beforeEl.style.opacity = 1;
    glowEl.style.opacity = 1;
  });
  card.addEventListener("focusout", () => {
    beforeEl.style.opacity = 0;
    glowEl.style.opacity = 0;
  });
});
