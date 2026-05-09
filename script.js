const track = document.getElementById('track');
const nextBtn = document.querySelector('.next-btn');
const preBtn = document.querySelector('.pre-btn');

let currentPhoto = 0;

nextBtn.addEventListener('click', () => {
    currentPhoto++;
    if (currentPhoto > 3) { currentPhoto = 0; } 
    updateMovement();
});

preBtn.addEventListener('click', () => {
    currentPhoto--;
    if (currentPhoto < 0) { currentPhoto = 3; } 
    updateMovement();
});

function updateMovement() {
    track.style.transform = `translateX(-${currentPhoto * 25}%)`;
}
