// Add to cart functionality
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".game-card");
    const gameName = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;

    // Animation feedback
    this.innerHTML = '<i class="fas fa-check"></i> Added!';
    this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

    setTimeout(() => {
      this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
      this.style.backgroundColor = "";
    }, 1500);

    // You would typically send this to a cart management system
    console.log(`Added ${gameName} (${price}) to cart`);
  });
});

// Search functionality
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const gameCards = document.querySelectorAll(".game-card");

  gameCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Category filter animation
document.querySelectorAll(".category-tag").forEach((tag) => {
  tag.addEventListener("click", function () {
    document
      .querySelectorAll(".category-tag")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    // Add filtering logic here
    const category = this.textContent.toLowerCase();
    console.log(`Filtering by category: ${category}`);
  });
});

// Newsletter subscription
const newsletterForm = document.querySelector(".newsletter");
const emailInput = newsletterForm.querySelector('input[type="email"]');
const subscribeButton = newsletterForm.querySelector("button");

subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (email && email.includes("@")) {
    // Animation feedback
    subscribeButton.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
    subscribeButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    emailInput.value = "";

    setTimeout(() => {
      subscribeButton.innerHTML =
        '<i class="fas fa-paper-plane"></i> Subscribe';
      subscribeButton.style.backgroundColor = "";
    }, 2000);

    // You would typically send this to a newsletter management system
    console.log(`Subscribed email: ${email}`);
  } else {
    alert("Please enter a valid email address");
  }
});

// Animate stats on scroll
const stats = document.querySelectorAll(".stat-number");
let animated = false;

function animateStats() {
  if (animated) return;

  const windowHeight = window.innerHeight;
  const statsSection = document.querySelector(".stats-section");
  const statsSectionTop = statsSection.getBoundingClientRect().top;

  if (statsSectionTop < windowHeight * 0.75) {
    stats.forEach((stat) => {
      const target = parseInt(stat.textContent);
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        stat.textContent =
          Math.round(current) + (stat.textContent.includes("+") ? "+" : "");
      }, 20);
    });
    animated = true;
  }
}

window.addEventListener("scroll", animateStats);
