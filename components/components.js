document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Toggle navbar on click
    toggler.addEventListener('click', function() {
        toggler.classList.contains('active')?toggler.classList.remove('active'):toggler.classList.add('active');
        navbarCollapse.classList.contains('active')?navbarCollapse.classList.add('active'):navbarCollapse.classList.remove('active');
    });

    // Clicking outside the navbar to close it
    document.addEventListener('click', function(event) {
        // console.log("run");
        var isClickInsideNavbar = toggler.contains(event.target) || navbarCollapse.contains(event.target);
// console.log(isClickInsideNavbar);
        if (!isClickInsideNavbar && navbarCollapse.classList.contains('active')) {
            toggler.classList.remove('active');
            navbarCollapse.classList.remove('active');
        }
    });
});

function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content and mark the tab as active
    const selectedTab = document.getElementById(tabId);
    const selectedTabButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);

    if (selectedTab && selectedTabButton) {
        selectedTab.style.display = 'flex';
        selectedTabButton.classList.add('active');
    }
}


  // JavaScript for Carousel functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    const transformValue = -currentSlide * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = 'translateX(' + transformValue + ')';

    updatePagination();
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function updatePagination() {
    const paginationDots = document.querySelector('.pagination');
    paginationDots.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => showSlide(i));
      paginationDots.appendChild(dot);
    }

    document.querySelectorAll('.dot')[currentSlide].classList.add('active');
  }

  // Autoplay
  setInterval(() => {
    nextSlide();
  }, 5000); // Adjust the interval as needed

  // Initial setup
  updatePagination();