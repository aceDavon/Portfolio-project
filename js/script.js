const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('topMenu');
const Xclose = document.getElementById('close');
const lists = document.querySelectorAll('#topMenu li');
const list = Array.from(lists);
console.log(Xclose);

[hamburger, Xclose, ...list].forEach((Element) => {
  Element.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    menu.classList.toggle('visible');
    Xclose.classList.toggle('visible');
  });
});
