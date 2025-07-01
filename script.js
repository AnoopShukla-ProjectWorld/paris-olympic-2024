document.addEventListener("DOMContentLoaded", function () {
  /* ***************************************************************** */
  /* *****************************Header Section****************************** */
  /* ***************************************************************** */
  const header = document.querySelector("header");
  const menuButton = document.getElementById("menu-button");
  const sidebarMenuButton = document.getElementById("sidebar-close-button"); // New button inside sidebar
  const sidebar = document.getElementById("sidebar");
  const originalOffsetY = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY > originalOffsetY) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  function toggleSidebar() {
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-500px";
    } else {
      sidebar.style.left = "0";
    }
  }

  menuButton.addEventListener("click", toggleSidebar);
  sidebarMenuButton.addEventListener("click", toggleSidebar);

  /* ***************************************************************** */
  /* *****************************Banner(Slider) Section****************************** */
  /* ***************************************************************** */
  const banners = document.querySelectorAll(".banner");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let interval = setInterval(showNextBanner, 5000);

  function showNextBanner() {
    banners[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % banners.length;
    banners[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      clearInterval(interval);
      banners[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
      currentIndex = parseInt(this.getAttribute("data-index"));
      banners[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
      interval = setInterval(showNextBanner, 5000);
    });
  });

  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      clearInterval(interval);
      interval = setInterval(showNextBanner, 5000);
    });
  });

  window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
  });

  /* ***************************************************************** */
  /* *****************************Even Medal Section****************************** */
  /* ***************************************************************** */
  document.querySelectorAll(".arrow-btn").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Arrow button clicked!");
    });
  });

  document.querySelector(".add-team-btn").addEventListener("click", () => {
    alert("Add your team button clicked!");
  });

  /* ***************************************************************** */
  /* *****************************Highlights Slider Section****************************** */
  /* ***************************************************************** */
  let currentSlideIndex = 0;
  const slideGroups = document.querySelectorAll(".slide-group");
  const totalSlides = slideGroups.length;

  const prevButton = document.querySelector(".sld.prev");
  const nextButton = document.querySelector(".sld.next");
  const currentSlideDisplay = document.querySelector(".current-slide");

  document.querySelector(".total-slides").textContent = totalSlides;

  function updateButtonStates() {
    prevButton.classList.remove("disabled", "active");
    nextButton.classList.remove("disabled", "active");

    if (currentSlideIndex === 0) {
      prevButton.classList.add("disabled");
      nextButton.classList.add("active");
    } else if (currentSlideIndex === totalSlides - 1) {
      nextButton.classList.add("disabled");
      prevButton.classList.add("active");
    } else {
      prevButton.classList.add("active");
      nextButton.classList.add("active");
    }
  }

  function showSlide(index) {
    const sliderContent = document.querySelector(".slider-content");
    const offset = -(index * 100);
    sliderContent.style.transform = `translateX(${offset}%)`;
    currentSlideDisplay.textContent = index + 1;
    updateButtonStates();
  }

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      showSlide(currentSlideIndex);
    }
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Initialize the slider
  showSlide(currentSlideIndex);

  /* ***************************************************************** */
  /* *****************************Olympic Shop Slider Section****************************** */
  /* ***************************************************************** */

  let currentShopSlideIndex = 0;
  const shopSlideGroups = document.querySelectorAll(".shop-slide-group");
  const totalShopSlides = shopSlideGroups.length;

  const shopPrevButton = document.querySelector(".shop-sld.prev");
  const shopNextButton = document.querySelector(".shop-sld.next");
  const shopCurrentSlideDisplay = document.querySelector(
    ".shop-pagination .current-slide"
  );

  document.querySelector(".shop-pagination .total-slides").textContent =
    totalShopSlides;

  function updateShopButtonStates() {
    shopPrevButton.classList.remove("disabled", "active");
    shopNextButton.classList.remove("disabled", "active");

    if (currentShopSlideIndex === 0) {
      shopPrevButton.classList.add("disabled");
      shopNextButton.classList.add("active");
    } else if (currentShopSlideIndex === totalShopSlides - 1) {
      shopNextButton.classList.add("disabled");
      shopPrevButton.classList.add("active");
    } else {
      shopPrevButton.classList.add("active");
      shopNextButton.classList.add("active");
    }
  }

  function showShopSlide(index) {
    const shopSliderContainer = document.querySelector(
      ".shop-slider-container"
    );
    const offset = -(index * 100);
    shopSliderContainer.style.transform = `translateX(${offset}%)`;
    shopCurrentSlideDisplay.textContent = index + 1;
    updateShopButtonStates();
  }

  function nextShopSlide() {
    if (currentShopSlideIndex < totalShopSlides - 1) {
      currentShopSlideIndex++;
      showShopSlide(currentShopSlideIndex);
    }
  }

  function prevShopSlide() {
    if (currentShopSlideIndex > 0) {
      currentShopSlideIndex--;
      showShopSlide(currentShopSlideIndex);
    }
  }

  shopPrevButton.addEventListener("click", prevShopSlide);
  shopNextButton.addEventListener("click", nextShopSlide);

  // Initialize the shop slider
  showShopSlide(currentShopSlideIndex);

  /* ***************************************************************** */
  /* *****************************FAQ Section****************************** */
  /* ***************************************************************** */

  // Toggle FAQ answer visibility
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const answer = faqItem.querySelector(".faq-answer");
      const icon = faqItem.querySelector(".toggle-icon");

      if (faqItem.classList.contains("active")) {
        faqItem.classList.remove("active");
        answer.style.display = "none";
      } else {
        faqItem.classList.add("active");
        answer.style.display = "block";
      }
    });
  });

  // Filter FAQ items based on category
  const filterButtons = document.querySelectorAll(".filter-button");
  const faqItems = document.querySelectorAll(".faq-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      faqItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // default filter to show all items on page load
  document.querySelector('.filter-button[data-filter="all"]').click();
});
