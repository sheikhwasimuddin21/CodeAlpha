const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

thumbnails.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  lightbox.style.display = 'flex';
  lightboxImg.src = thumbnails[currentIndex].src;
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  showImage();
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
