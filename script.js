
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const quantityDisplay = document.querySelector('.quantity');


let quantity = parseInt(quantityDisplay.textContent); 


minusBtn.addEventListener('click', () => {
    if (quantity > 0) { 
        quantity--;
        quantityDisplay.textContent = quantity; 
    }
});


plusBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity; 
});

const sneakerImage = document.querySelector('.sneaker-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Array of image paths
const images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
];

let currentImageIndex = 0;

function updateImage() {
    sneakerImage.src = images[currentImageIndex];
}

leftArrow.addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
});

rightArrow.addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage();
});

updateImage();


const menuIcon = document.querySelector('#menu-icon');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#close-btn');


menuIcon.addEventListener('click', function() {
    sidebar.classList.add('active');
});


closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
});