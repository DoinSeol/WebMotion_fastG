const btnEl = document.querySelectorAll('.btn');
// ...
btnEl[0].addEventListener('click', () => {
  alert("Click");
  btnEl[0].classList.add('loading'); 
})