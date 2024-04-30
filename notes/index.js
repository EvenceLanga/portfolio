const modelButtons = document.querySelectorAll('.services__button');
const closeButtons = document.querySelectorAll('.services__model-content .services__button');

// Function to toggle the visibility of the service model content
function toggleServiceModel() {
    const model = this.parentElement.querySelector('.services__model');
    model.classList.toggle('active-model');
}

// Function to close the service model content
function closeServiceModel() {
    const modelContent = this.parentElement;
    modelContent.parentElement.classList.remove('active-model');
}

// Add click event listeners to all "Know More" buttons
modelButtons.forEach(button => {
    button.addEventListener('click', toggleServiceModel);
});

// Add click event listeners to all close buttons inside service model content
closeButtons.forEach(button => {
    button.addEventListener('click', closeServiceModel);
});


var swiper = new swiper('.testimonial__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
