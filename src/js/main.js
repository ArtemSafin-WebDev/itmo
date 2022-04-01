// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import participantsSlider from './modules/participantsSlider';
import daysLeft from './modules/daysLeft';
import preloaderHide from './modules/preloaderHide';
import sectionAnimation from './modules/sectionAnimation';
import initTabs from './modules/initTabs';
import gallerySliders from './modules/gallerySliders';
import startAnim from './modules/startAnim';
import initModal from './modules/initModal';

window.onload = () => {
  setTimeout(() => {
    preloaderHide();
  }, 400);

  setTimeout(() => {
    startAnim();
  }, 500);
};


documenReady(() => {
  lazyIMages();
  participantsSlider();
  daysLeft();
  sectionAnimation();
  initTabs();
  gallerySliders();
  initModal();
});
