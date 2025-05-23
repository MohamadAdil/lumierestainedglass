$(document).ready(function () {
  // Function to toggle the dropdown visibility
  $(".filter-btn").click(function (event) {
    // Prevents the click from propagating to the body, preventing accidental closing
    event.stopPropagation();
    $("#filterDropdown").toggle(); // jQuery method to toggle visibility
  });

  // Close the dropdown if the user clicks anywhere outside of the button
  $(document).click(function (event) {
    if (!$(event.target).closest(".filter-btn, .filter-dropdown").length) {
      $("#filterDropdown").hide(); // jQuery method to hide the dropdown
    }
  });
});

//
// STRAIGHT MARQUEE
// DATA SPEED
let marqueeCarouselSpeed;
if (document.querySelector(".marquee-carousel").dataset.speed) {
  marqueeCarouselSpeed =
    document.querySelector(".marquee-carousel").dataset.speed;
} else {
  marqueeCarouselSpeed = 10000;
}

let marqueeCarousel = new Swiper(".marquee-carousel", {
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  slidesPerView: 5,
  speed: marqueeCarouselSpeed, // FOR MARQUEE SPEED
  spaceBetween: 50,
  resistance: true,
  resistanceRatio: 0,
  loop: true,
  allowTouchMove: false,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

// REVERSE MARQUEE
// DATA SPEED
let reverseMarqueeCarouselSpeed;
if (document.querySelector(".reverse-marquee-carousel").dataset.speed) {
  reverseMarqueeCarouselSpeed = document.querySelector(
    ".reverse-marquee-carousel"
  ).dataset.speed;
} else {
  reverseMarqueeCarouselSpeed = 10000;
}

let reverseMarqueeCarousel = new Swiper(".reverse-marquee-carousel", {
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    reverseDirection: true, // FOR REVERSE
  },
  slidesPerView: 5,
  speed: reverseMarqueeCarouselSpeed, // FOR MARQUEE SPEED
  spaceBetween: 50,
  resistance: true,
  resistanceRatio: 0,
  loop: true,
  allowTouchMove: false,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
