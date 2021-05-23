'use strict';

const mainHeader = document.querySelector('.main-nav');
const headerToggle = document.querySelector('.main-nav__open-menu');
const siteList = document.querySelector('.site-list');
const pageBody = document.querySelector('.page-body');
const anchors = document.querySelectorAll('a[href*="#');

mainHeader.classList.remove('main-nav--nojs"');
mainHeader.classList.add('main-nav--js');
headerToggle.classList.remove('visually-hidden');
siteList.classList.remove('site-list--nojs');

headerToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains('main-nav--closed')) {
    mainHeader.classList.remove('main-nav--closed');
    mainHeader.classList.add('main-nav--opened');
    siteList.style.display = 'flex';
    pageBody.style.overflow = 'hidden';

  } else {
    mainHeader.classList.add('main-nav--closed');
    mainHeader.classList.remove('main-nav--opened');
    siteList.style.display = 'none';
  }
});

for (let anchor of anchors) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


const element = document.querySelector('.feedback__input-email');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);
