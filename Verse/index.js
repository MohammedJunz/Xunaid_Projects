
const toggleBtn = document.querySelector('.toggle_btn');
const drop = document.querySelector('.dropdown');
const toggleIcon = toggleBtn.querySelector('i'); 

let isOpen = false;

toggleBtn.onclick = function () {
isOpen = !isOpen; 
drop.classList.toggle('open'); 


toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

