const jobBtn = document.querySelector('.job a');
jobBtn.addEventListener('click', function () {
  const arrowIcn = document.querySelector('.job a i');
  const subMenu = document.querySelector('.job .sub-menu');
  jobBtn.classList.toggle('active');
  arrowIcn.classList.toggle('rotate');
  subMenu.classList.toggle('showed');
});

const navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener('click', function() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
});

const allLink = document.querySelector('.all-btn');
const graphicBtn = document.querySelector('.graphic-btn');
const uiBtn = document.querySelector('.ui-btn');
const webBtn = document.querySelector('.web-btn');

const uiPost = document.querySelector('.ui');
const graphicPost = document.querySelector('.graphic');
const webPost = document.querySelector('.web');

allLink.addEventListener('click', function () {
  if(allLink.classList.contains('active')) {
    graphicBtn.classList.remove('active');
    uiBtn.classList.remove('active');
    webBtn.classList.remove('active');
  }
  else {
    uiPost.classList.add('showed');
    graphicPost.classList.add('showed');
    webPost.classList.add('showed');
    allLink.classList.add('active');
    graphicBtn.classList.remove('active');
    uiBtn.classList.remove('active');
    webBtn.classList.remove('active');
  }
});
graphicBtn.addEventListener('click', function () {
  if(graphicBtn.classList.contains('active')) {
    allLink.classList.remove('active');
    uiBtn.classList.remove('active');
    webBtn.classList.remove('active');
  }
  else {
    uiPost.classList.remove('showed');
    graphicPost.classList.add('showed');
    webPost.classList.remove('showed');
    graphicBtn.classList.add('active');
    allLink.classList.remove('active');
    uiBtn.classList.remove('active');
    webBtn.classList.remove('active');
  }
});
uiBtn.addEventListener('click', function () {
  if(uiBtn.classList.contains('active')) {
    graphicBtn.classList.remove('active');
    allLink.classList.remove('active');
    webBtn.classList.remove('active');
  }
  else {
    uiBtn.classList.add('active');
    uiPost.classList.add('showed');
    graphicPost.classList.remove('showed');
    webPost.classList.remove('showed');
    graphicBtn.classList.remove('active');
    allLink.classList.remove('active');
    webBtn.classList.remove('active');
  }
})
webBtn.addEventListener('click', function () {
  if(webBtn.classList.contains('active')) {
    graphicBtn.classList.remove('active');
    uiBtn.classList.remove('active');
    allLink.classList.remove('active');
  }
  else {
    webBtn.classList.add('active');
    uiPost.classList.remove('showed');
    graphicPost.classList.remove('showed');
    webPost.classList.add('showed');
    graphicBtn.classList.remove('active');
    uiBtn.classList.remove('active');
    allLink.classList.remove('active');
  }
})