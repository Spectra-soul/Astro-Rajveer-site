 // Scroll function to change navbar background color
 window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var togglerIcon = document.querySelector('.navbar-toggler-icon');
    
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      togglerIcon.style.backgroundImage = "url('data:image/svg+xml;charset=UTF8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 fill=%27black%27 class=%27bi bi-list%27 viewBox=%270 0 16 16%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z%27/%3E%3C/svg%3E')";
    } else {
      navbar.classList.remove('scrolled');
      togglerIcon.style.backgroundImage = "url('data:image/svg+xml;charset=UTF8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 fill=%27white%27 class=%27bi bi-list%27 viewBox=%270 0 16 16%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z%27/%3E%3C/svg%3E')";
    }
  });



//   // Scroll animation for the boxes
// document.addEventListener("scroll", function() {
//     const boxes = document.querySelectorAll(".box");
  
//     boxes.forEach(box => {
//       const boxPosition = box.getBoundingClientRect().top;
//       const screenPosition = window.innerHeight / 1.3;
  
//       if (boxPosition < screenPosition) {
//         box.classList.add("show");
//       }
//     });
//   });
  


// Detect scroll and apply pop-out effect to image
// Detect scroll and apply pop-up effect to the image
window.addEventListener('scroll', function() {
    const image = document.querySelector('.pop-up-image');
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    if (imagePosition < screenPosition) {
      image.classList.add('pop-up');
    }
  });
  



// counting part
document.addEventListener("DOMContentLoaded", function () {
    // Function to animate counting
    function animateCounting(element, target, hasPlus) {
      let count = 0;
      const increment = target / 100; // Number of steps
      const step = () => {
        count += increment;
        if (count >= target) {
          // Final value check and apply plus sign if necessary
          element.textContent = hasPlus === "true" ? `${Math.floor(target)}+` : Math.floor(target);
        } else {
          element.textContent = hasPlus === "true" ? `${Math.floor(count)}+` : Math.floor(count);
          requestAnimationFrame(step); // Continue animation
        }
      };
      step();
    }
  
    // Intersection Observer to trigger counting animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            const hasPlus = el.getAttribute('data-plus'); // Check if plus sign is needed
            animateCounting(el, target, hasPlus);
            observer.unobserve(el); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );
  
    // Observe each counting text element
    document.querySelectorAll('.counting-text').forEach(el => {
      observer.observe(el);
    });
  });
  


  // FAQ

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      
      // Toggle active class for the clicked item
      faqItem.classList.toggle('active');
      
      // Hide all other answers
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
    });
  });



// featured on
  document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var statsSwiper = new Swiper('.theme-slider', {
        slidesPerView: 1, // Default for extra small screens
        spaceBetween: 10, // Space between slides
        loop: true, // Enable infinite loop
        speed: 700, // Adjust speed for smoother continuous sliding
        autoplay: {
            delay: 0, // Continuous autoplay without delay
            disableOnInteraction: false, // Prevent stopping autoplay on user interaction
        },
        breakpoints: {
            0: { // For mobile screens (up to 768px)
                slidesPerView: 4, // Show 4 slides at a time
                spaceBetween: 10,
            },
            768: { // For tablets and up
                slidesPerView: 4, // Show 4 slides on medium+ screens
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4, // Show 4 slides on larger screens
                spaceBetween: 10,
            }
        }
    });
});




// move to top
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var moveToTopBtn = document.getElementById("moveToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    moveToTopBtn.classList.add("show");
  } else {
    moveToTopBtn.classList.remove("show");
  }
}

// Smooth scroll back to the top
document.getElementById("moveToTopBtn").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// move to top