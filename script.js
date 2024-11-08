// JavaScript for toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.profile-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    // Open sidebar
    profileIcon.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    // Close sidebar
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !profileIcon.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});

// Opening and closing of modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block"; // Show the modal
    } else {
        console.error(`Modal with ID "${modalId}" not found.`);
    }
}

// Generic close modal function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none"; // Hide the modal
    } else {
        console.error(`Modal with ID "${modalId}" not found.`);
    }
}

// Location setting modal functionality
// Open Modal
function openLocationModal() {
    document.getElementById("regionModal").style.display = "block";
  }
  
  // Close Modal
  function closeLocationModal() {
    document.getElementById("regionModal").style.display = "none";
  }
  
  // Map of regions to currencies
  const regionCurrencyMap = {
    "US": "USD",
    "UK": "GBP",
    "EU": "EUR",
    "JP": "JPY",
  };
  
  // Load region and currency from localStorage on page load
  window.onload = function() {
    const savedRegion = localStorage.getItem("selectedRegion");
    const savedCurrency = localStorage.getItem("selectedCurrency");
  
    if (savedRegion && savedCurrency) {
      // Update both the navbar and sidebar with the saved region
      document.getElementById("selectedRegion").textContent = savedRegion;
      document.getElementById("selectedRegionSidebar").textContent = savedRegion;

      // Set the currency display in the modal
      document.getElementById("currencyDisplay").value = savedCurrency;

      // Set the selected option in the dropdown based on the saved currency
      const regionKey = Object.keys(regionCurrencyMap).find(
          key => regionCurrencyMap[key] === savedCurrency
      );
      if (regionKey) {
          document.getElementById("regionSelect").value = regionKey;
      }
  } else {
      // Default to United States and USD if nothing is saved
      document.getElementById("selectedRegion").textContent = "United States";
      document.getElementById("selectedRegionSidebar").textContent = "United States";
      document.getElementById("currencyDisplay").value = "USD";
  }
};
  
  // Update currency field based on region selection
  function updateCurrency() {
    const region = document.getElementById("regionSelect").value;
    const currency = regionCurrencyMap[region] || "USD";
    document.getElementById("currencyDisplay").value = currency;
  }
  
  // Save the selected region and update the navigation link text
  function saveRegion() {
    const regionSelect = document.getElementById("regionSelect");
    const selectedRegionText = regionSelect.options[regionSelect.selectedIndex].text;
    const selectedCurrency = document.getElementById("currencyDisplay").value;

    // Update display text in both Navbar and Sidebar
    document.getElementById("selectedRegion").textContent = selectedRegionText;
    document.getElementById("selectedRegionSidebar").textContent = selectedRegionText;

    // Save the selected region and currency to localStorage
    localStorage.setItem("selectedRegion", selectedRegionText);
    localStorage.setItem("selectedCurrency", selectedCurrency);

    // Close modal
    closeLocationModal();
}



// Share button functionality

// Get elements for share modal
const shareBtnLg = document.getElementById('shareBtn-lg');
const shareBtnSm = document.getElementById('shareBtn-sm');
const shareModal = document.getElementById('shareModal');
const closeShareModal = document.getElementById('closeShareModal');
const copyLink = document.getElementById('copylink');
const copyMsg = document.getElementById('copyMsg');

// Open modal when either "Share" button is clicked
shareBtnLg.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    openModal(); // Open the share modal
};

shareBtnSm.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    openModal(); // Open the share modal
};

// Close modal when "X" button is clicked
closeShareModal.onclick = function() {
    closeModal(); // Close the share modal
};

// Close modal if clicked outside of modal content
window.onclick = function(event) {
    if (event.target == shareModal) {
        closeModal(); // Close the modal if clicked outside
    }
};

// Copy link functionality
copyLink.onclick = function() {
    const propertyLink = "http://127.0.0.1:5500/index.html#";  // Replace with actual property link
    navigator.clipboard.writeText(propertyLink).then(function() {
        copyMsg.textContent = "Link copied to clipboard!";
    }).catch(function(error) {
        copyMsg.textContent = "Failed to copy link!";
    });
};

// Functions to open and close the modal
function openModal() {
    shareModal.style.display = 'block';
}

function closeModal() {
    shareModal.style.display = 'none';
}



// Save button functionality
const saveBtnLg = document.getElementById('saveBtn-lg');
const saveBtnSm = document.getElementById('saveBtn-sm');


// Check localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  const isSaved = localStorage.getItem('propertySaved') === 'true';

  if (isSaved) {
      saveBtnLg.classList.add('saved');
      saveBtnSm.classList.add('saved');
      saveBtnLg.innerHTML = '<i class="ri-heart-fill"></i> Saved';
      saveBtnSm.innerHTML = '<i class="ri-heart-fill"></i>';
  } else {
      saveBtnLg.innerHTML = '<i class="ri-heart-3-line"></i> Save';
      saveBtnSm.innerHTML = '<i class="ri-heart-3-line"></i>';
  }
});

// Toggle save state on button click for desktop
saveBtnLg.onclick = function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  toggleSaveState();
};

// Toggle save state on button click for mobile
saveBtnSm.onclick = function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  toggleSaveState();
};

// Function to toggle save state across both buttons
function toggleSaveState() {
  const isCurrentlySaved = saveBtnLg.classList.contains('saved');

  // Toggle the 'saved' class and update text for both buttons
  if (isCurrentlySaved) {
      saveBtnLg.classList.remove('saved');
      saveBtnSm.classList.remove('saved');
      saveBtnLg.innerHTML = '<i class="ri-heart-3-line"></i> Save';
      saveBtnSm.innerHTML = '<i class="ri-heart-3-line"></i>';
      localStorage.setItem('propertySaved', 'false'); // Update localStorage
  } else {
      saveBtnLg.classList.add('saved');
      saveBtnSm.classList.add('saved');
      saveBtnLg.innerHTML = '<i class="ri-heart-fill"></i> Saved';
      saveBtnSm.innerHTML = '<i class="ri-heart-fill"></i>';
      localStorage.setItem('propertySaved', 'true'); // Update localStorage
  }
}



// Gallery Images (array of image paths)
const images = [
  "images/3.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/1.jpg"
];
let currentIndex = 0;

// DOM Elements
const openGalleryBtn = document.getElementById('openGalleryBtn');
const openGalleryBtnSm = document.getElementById('openGalleryBtn-sm');
console.log(openGalleryBtnSm.id);
const galleryModal = document.getElementById('galleryModal');
console.log(galleryModal);
const closeGalleryModal = document.getElementById('closeGalleryModal');
const galleryImage = document.getElementById('galleryImage');
const prevImageBtn = document.getElementById('prevImage');
const nextImageBtn = document.getElementById('nextImage');
const imageCounter = document.getElementById('imageCounter');
console.log(window.innerWidth);

openGalleryBtnSm.onclick = function() {
  console.log('Button clicked');
  galleryModal.style.display = "flex";  // Show the modal
  galleryModal.style.visibility = "visible";  // Ensure visibility
  console.log('Gallery Modal Display:', galleryModal.style.display);

  updateGallery();  // Update gallery image and other details
};



// Open Modal Function for large screen
openGalleryBtn.onclick = function() {
  galleryModal.style.display = "flex";
  updateGallery();
};

// Close Modal Function
closeGalleryModal.onclick = function() {
  galleryModal.style.display = "none";
};

// Update Gallery Function
function updateGallery() {
  console.log('Updating gallery...');
  
  // Ensure galleryImage is getting the right source
  galleryImage.src = images[currentIndex];  
  console.log('Current image:', galleryImage.src);
  
  // Update image counter
  imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
  console.log('Image Counter:', imageCounter.textContent);

  // Check if elements are properly updated
  console.log('Image Source:', galleryImage.src);
  console.log('Counter:', imageCounter.textContent);

  // Enable/Disable Prev/Next Buttons
  prevImageBtn.classList.toggle('disabled', currentIndex === 0);
  nextImageBtn.classList.toggle('disabled', currentIndex === images.length - 1);
}


// Previous Image
prevImageBtn.onclick = function() {
  if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
  }
};

// Next Image
nextImageBtn.onclick = function() {
  if (currentIndex < images.length - 1) {
      currentIndex++;
      updateGallery();
  }
};

// Close Modal when clicking outside of content
window.onclick = function(event) {
  if (event.target == galleryModal) {
      galleryModal.style.display = "none";
  }
};



// travelers count and update part

// Traveler counts
let adultCount = 2;
let childCount = 0;

// DOM Elements
const travelersDisplay = document.getElementById('travelersDisplay');
const travelersModal = document.getElementById('travelersModal');
const adultMinus = document.getElementById('adultMinus');
const adultPlus = document.getElementById('adultPlus');
const adultCountDisplay = document.getElementById('adultCount');
const childMinus = document.getElementById('childMinus');
const childPlus = document.getElementById('childPlus');
const childCountDisplay = document.getElementById('childCount');
const doneBtn = document.getElementById('doneBtn');

// Open modal
travelersDisplay.onclick = function() {
    travelersModal.style.display = "flex";
};

// Close modal
doneBtn.onclick = function() {
    updateTravelersDisplay();
    travelersModal.style.display = "none";
};

// Update the travelers display with the total count
// travelers count and update part


// Update the travelers display with the total count
function updateTravelersDisplay() {
  const totalTravelers = adultCount + childCount;
  travelersDisplay.textContent = `${totalTravelers} traveler${totalTravelers > 1 ? 's' : ''}`;
}


// Update the count displays
function updateCountDisplays() {
    adultCountDisplay.textContent = adultCount;
    childCountDisplay.textContent = childCount;

    // Enable/disable minus buttons based on count
    adultMinus.disabled = adultCount === 0;
    childMinus.disabled = childCount === 0;
}

// Adult increase/decrease buttons
adultMinus.onclick = function() {
    if (adultCount > 0) adultCount--;
    updateCountDisplays();
};
adultPlus.onclick = function() {
    adultCount++;
    updateCountDisplays();
};

// Child increase/decrease buttons
childMinus.onclick = function() {
    if (childCount > 0) childCount--;
    updateCountDisplays();
};
childPlus.onclick = function() {
    childCount++;
    updateCountDisplays();
};

// Initialize display on load
updateCountDisplays();
updateTravelersDisplay();

// Update the count displays
function updateCountDisplays() {
    adultCountDisplay.textContent = adultCount;
    childCountDisplay.textContent = childCount;

    // Enable/disable minus buttons based on count
    adultMinus.disabled = adultCount === 0;
    childMinus.disabled = childCount === 0;
}

// Adult increase/decrease buttons
adultMinus.onclick = function() {
    if (adultCount > 0) adultCount--;
    updateCountDisplays();
};
adultPlus.onclick = function() {
    adultCount++;
    updateCountDisplays();
};

// Child increase/decrease buttons
childMinus.onclick = function() {
    if (childCount > 0) childCount--;
    updateCountDisplays();
};
childPlus.onclick = function() {
    childCount++;
    updateCountDisplays();
};

// Initialize display on load
updateCountDisplays();
updateTravelersDisplay();