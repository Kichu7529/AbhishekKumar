var slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide() {
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }else if(slideIndex<1){
    slideIndex = slides.length;
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].classList.add("active-dot");
}
document.addEventListener("DOMContentLoaded",showSlide());