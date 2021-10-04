let burgerButton = document.querySelector('.burger__button');
let modalWindow = document.querySelector('.modal-window');
let closeButton = document.querySelector('.close-button');

burgerButton.addEventListener('click', () => {
   modalWindow.style.display = 'block'
});
closeButton.addEventListener('click', () => {
   modalWindow.style.display = 'none';
});