let cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
})

const toggle = document.querySelector('.toggle');
const menuHader = document.querySelector('.menuHader');
const containerHeader = document.querySelector('.containerHeader');
const textBoxSpan = document.querySelector('.textBoxSpan');
const quote = document.querySelector('.quote');
const texBoxArgument = document.querySelector('.texBoxArgument');
const containerbl = document.querySelector('.containerbl');
const imgBox = document.querySelector('.imgBox');
const sci = document.querySelector('.sci');
const headerList = document.getElementById('headerList');
const home1 = document.querySelector('.home1');
const miCv = document.querySelector('.miCv');
const tecnologias1 = document.querySelector('.tecnologias1');
const contacto = document.querySelector('.contacto');
const proyectos = document.querySelector('.proyectos');

toggle.onclick = function () {
  toggle.classList.toggle('active');
  menuHader.classList.toggle('active');
  containerHeader.classList.toggle('active');
  textBoxSpan.classList.toggle('active');
  quote.classList.toggle('active');
  texBoxArgument.classList.toggle('active');
  containerbl.classList.toggle('active');
  imgBox.classList.toggle('active');
  sci.classList.toggle('active');
  headerList.classList.toggle('active');
}

home1.addEventListener('click', function () {
  toggle.classList.remove('active');
  menuHader.classList.remove('active');
  containerHeader.classList.remove('active');
  textBoxSpan.classList.remove('active');
  quote.classList.remove('active');
  texBoxArgument.classList.remove('active');
  containerbl.classList.remove('active');
  imgBox.classList.remove('active');
  sci.classList.remove('active');
  headerList.classList.remove('active');
})
miCv.addEventListener('click', function () {
  toggle.classList.remove('active');
  menuHader.classList.remove('active');
  containerHeader.classList.remove('active');
  textBoxSpan.classList.remove('active');
  quote.classList.remove('active');
  texBoxArgument.classList.remove('active');
  containerbl.classList.remove('active');
  imgBox.classList.remove('active');
  sci.classList.remove('active');
  headerList.classList.remove('active');
})
tecnologias1.addEventListener('click', function () {
  toggle.classList.remove('active');
  menuHader.classList.remove('active');
  containerHeader.classList.remove('active');
  textBoxSpan.classList.remove('active');
  quote.classList.remove('active');
  texBoxArgument.classList.remove('active');
  containerbl.classList.remove('active');
  imgBox.classList.remove('active');
  sci.classList.remove('active');
  headerList.classList.remove('active');
})
contacto.addEventListener('click', function () {
  toggle.classList.remove('active');
  menuHader.classList.remove('active');
  containerHeader.classList.remove('active');
  textBoxSpan.classList.remove('active');
  quote.classList.remove('active');
  texBoxArgument.classList.remove('active');
  containerbl.classList.remove('active');
  imgBox.classList.remove('active');
  sci.classList.remove('active');
  headerList.classList.remove('active');
})
proyectos.addEventListener('click', function () {
  toggle.classList.remove('active');
  menuHader.classList.remove('active');
  containerHeader.classList.remove('active');
  textBoxSpan.classList.remove('active');
  quote.classList.remove('active');
  texBoxArgument.classList.remove('active');
  containerbl.classList.remove('active');
  imgBox.classList.remove('active');
  sci.classList.remove('active');
  headerList.classList.remove('active');
})





