// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

const cross = document.querySelector('.header__info-cross'),
  info = document.querySelector('.header__info');

cross.addEventListener('click', () => {
  info.classList.add('closed');
});
