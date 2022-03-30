// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import participantsSlider from './modules/participantsSlider';
import daysLeft from './modules/daysLeft';
import preloaderHide from './modules/preloaderHide';

window.onload = () => {
  preloaderHide();
};

documenReady(() => {
  lazyIMages();
  participantsSlider();
  daysLeft();
});
