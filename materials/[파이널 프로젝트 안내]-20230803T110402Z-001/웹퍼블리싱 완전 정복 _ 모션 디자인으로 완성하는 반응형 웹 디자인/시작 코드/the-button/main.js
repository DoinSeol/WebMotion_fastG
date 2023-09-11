const btnEl = document.querySelectorAll('.btn');
// ...
btnEl[0].addEventListener('click', () => {
  // alert("Click");
  btnEl[0].classList.add('loading');
  setTimeout(() => {
    btnEl[0].classList.remove('loading')
  }, 3000)
})