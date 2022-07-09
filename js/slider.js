const carousel = document.getElementById("car");
const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");
const numOfSlides = Array.from(document.querySelector('.car-slides').children);
const carouselContainer = document.querySelectorAll('.slide');
let acc = 0;


leftBtn.onclick = () => {
    carouselContainer[acc].classList.toggle('current');
    carouselContainer[acc].classList.toggle('active');
if (acc <= 0) {
    acc = carouselContainer.length - 1;
    carouselContainer[acc].classList.toggle('current');
    carouselContainer[acc].classList.toggle('active');
}
else{
acc--;
carouselContainer[acc].classList.toggle('current');
    carouselContainer[acc].classList.toggle('active');

}
console.log(acc);

    
        
    
        
        

    


};
rightBtn.onclick = () => {
    carouselContainer[acc].classList.toggle('current');
    carouselContainer[acc].classList.toggle('active');
    acc++;
    if (acc >= numOfSlides.length) {
        acc = 0;

    }
    carouselContainer[acc].classList.toggle('current');
    carouselContainer[acc].classList.toggle('active');
    console.log(acc);


};









