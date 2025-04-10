const words = document.querySelectorAll(".animated-text span");

gsap.set(words[0], { opacity: 1, y: 0 }); // set the first word visible

let current = 0;
setInterval(() => {
  let next = (current + 1) % words.length;

  // Animate current out
  gsap.to(words[current], {
    duration: 0.5,
    y: -100,
    opacity: 0,
    ease: "power2.out"
  });

  // Animate next in
  gsap.fromTo(
    words[next],
    { y: 100, opacity: 0 },
    {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power2.out"
    }
  );

  current = next;
}, 2000); // change every 2 seconds




const vSlides = document.querySelectorAll(".animated-txt-con");
const vSliderTrack = document.querySelector(".animation-context");
let vCurrent = 0;

function slideVerticalBounce() {
  vCurrent = (vCurrent + 1) % vSlides.length;

  gsap.to(vSliderTrack, {
    y: -vCurrent * 50, // match height of each slide
    duration: 1,
    ease: "bounce.out" // BOUNCE!
  });
}

setInterval(slideVerticalBounce, 3000);




const track = document.querySelector('.image-slider');
const dots = document.querySelectorAll('.dot');
let rent = 0;

function updateSlider(index) {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    rent = index;
    updateSlider(rent);
  });
});

// Optional auto-play
setInterval(() => {
  rent = (rent + 1) % dots.length;
  updateSlider(rent);
}, 5000);


// active page
window.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".text-links a");
  
    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href");
      if (linkHref === currentLocation) {
        link.classList.add("active");
      }
    });
  });


  
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('closeBtn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  
  hamburger.addEventListener('click', () => {
      mobileOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });
  
  closeBtn.addEventListener('click', () => {
      mobileOverlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
  });
  
  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
          mobileOverlay.style.display = 'none';
          document.body.style.overflow = 'auto';
      });
  });
  



  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
  
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thanks for your message! 🎉");
          form.reset();
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(() => {
        alert("Oops! Something went wrong.");
      });
  });
  




    // Fade-in on load
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("pageTransition").classList.add("active");
      });
    
      // Optional: Fade-out before navigating to a new page
      const links = document.querySelectorAll("a");
    
      links.forEach(link => {
        if (link.getAttribute("target") !== "_blank") {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            document.getElementById("pageTransition").classList.remove("active");
            document.getElementById("pageTransition").classList.add("fade-out");
    
            setTimeout(() => {
              window.location.href = href;
            }, 500); // Match the duration of fade-out
          });
        }
      });