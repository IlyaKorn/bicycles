'use strict';
const mainHeader = document.querySelector('.main-nav');
const headerToggle = document.querySelector('.main-nav__open-menu');
const siteList = document.querySelector('.site-list');
const pageBody = document.querySelector('.page-body');

mainHeader.classList.remove('main-nav--nojs"');

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
