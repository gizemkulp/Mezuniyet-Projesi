var images = document.querySelectorAll('.slider img');
var current = 0;
var time = 3000;

function slide() {
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  current = (current != images.length - 1) ? current + 1 : 0;
  images[current].classList.add('active');
  setTimeout(slide, time);
}
slide();


