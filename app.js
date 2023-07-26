const modal = document.getElementById('modal');
const submitBtn = document.getElementById('submit-button');
const closeBtn = document.getElementsByClassName('close')[0];


submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }