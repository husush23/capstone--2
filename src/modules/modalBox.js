const parentEl = document.querySelector('.cards-container');
const modal = document.querySelector('.modal');

// Open modal
export const openModal = parentEl.addEventListener('click', (e) => {
  if (e.target.matches('.fa-comment')) {
    modal.style.display = 'block';
  }
});

// Close modal
const closeModal = () => {
  modal.style.display = 'none';
};
export const close = modal.addEventListener('click', closeModal);
