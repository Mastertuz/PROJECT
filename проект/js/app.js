$(function(){
   $('.menu__btn').on('click', function(){
    $('.header-top').toggleClass
    ('header-top--active');
   });
});





const slides = document.querySelectorAll('.slide')

for (const slide of slides){
   slide.addEventListener('click', () => {
clearaActiveClasses()

slide.classList.add('active')
   })
}

function clearaActiveClasses() {
   slides.forEach((slide) => {
slide.classList.remove('active')
   })
}

