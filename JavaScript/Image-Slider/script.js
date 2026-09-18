// Array containing the image URLs used in the slider
const images = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop&q=90",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&q=90",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=800&fit=crop&q=90",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&q=90",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&q=90",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop&q=90",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=90",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&q=90",
];

// Get the HTML elements from the page
const sliderImage = document.getElementById("sliderImage");
const slideNumber = document.getElementById("slideNumber");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const numbersContainer = document.getElementById("numbersContainer");

// Store the index of the currently displayed image
let currentIndex = 0;

// Create a number for each image dynamically
for (let i = 0; i < images.length; i++) {
  const li = document.createElement("li");

  // Display the image number
  li.textContent = i + 1;

  // Add Tailwind CSS classes to style the number
  li.className =
    "w-6 h-6 rounded-md bg-zinc-700 text-white cursor-pointer flex justify-center items-center text-sm transition-colors";

  // Add a click event to change to the selected image
  li.addEventListener("click", function () {
    currentIndex = i;
    updateSlider();
  });

  numbersContainer.appendChild(li);
}

// Add click events to the Next and Previous buttons
nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);

// Move to the next image
function showNextSlide() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateSlider();
  }
}

// Move to the previous image
function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// Update the active slide number
function updateActiveNumber() {
  const numberItems = numbersContainer.children;

  for (let i = 0; i < numberItems.length; i++) {
    if (i === currentIndex) {
      // Make the current number violet
      numberItems[i].classList.remove("bg-zinc-700");
      numberItems[i].classList.add("bg-violet-600");
    } else {
      // Make the other numbers gray
      numberItems[i].classList.remove("bg-violet-600");
      numberItems[i].classList.add("bg-zinc-700");
    }
  }
}

// Update the image, slide number, active number, and buttons
function updateSlider() {
  // Change the displayed image
  sliderImage.src = images[currentIndex];

  // Update the slide number
  slideNumber.textContent = `Slide #${currentIndex + 1} of ${images.length}`;

  // Update the active number
  updateActiveNumber();

  // Disable the Previous button on the first slide
  if (currentIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Disable the Next button on the last slide
  if (currentIndex === images.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Check if the images array is empty before starting the slider
if (images.length === 0) {
  console.warn("The image array is empty, the slider cannot be played.");
  sliderImage.alt = "No images available";
  nextBtn.disabled = true;
  prevBtn.disabled = true;
} else {
  // Start the slider
  updateSlider();
}