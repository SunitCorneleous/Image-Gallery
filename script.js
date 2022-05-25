const fullImageBox = document.querySelector('#fullImgBox');
const fullImage = document.querySelector('#fullImg');
const closeIcon = document.querySelector('#close');

const image = document.querySelectorAll('.gallery-container img');

image.forEach(img => img.addEventListener('click', showImage));

closeIcon.addEventListener('click', close);

// show image function
function showImage() {
  fullImageBox.style.display = 'flex';
  fullImage.src = this.src;

  document.querySelector("body").classList.add('disable-scroll');
}

// close image function
function close(){
  fullImageBox.style.display = 'none';
  document.querySelector("body").classList.remove('disable-scroll');
}