import Accordion from './accordion.js';
import Collapse from './collapse.js';
import TabNav from './tab.js';
import Modal from './modal.js';
import DropDown from './dropdown.js';
import MenuMobile from './menu-mobile.js';
import ScrollAnimation from './scroll-animation.js';
import PopOver from './popover.js';
import SmoothScroll from './smooth-scroll.js';
import ActivateNavigation from './active-navigation.js';
import VerticalMenuNavigation from './vertical-navigation.js';
import SlidebackTopButton from './back-top.js';
import SlideNav from './slide.js';

const accordion = new Accordion('[data-accordion="group"]');
accordion.init();

const collapse = new Collapse('[data-collapse="group"]');
collapse.init();

const tab = new TabNav('[data-tab="group"]');
tab.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const dropdown = new DropDown('[data-dropdown="link"]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', '[data-menu="close"]', '[data-bgblack]', 'active');
menuMobile.init();

const scrollAnimation = new ScrollAnimation('[data-anime^="scroll"]');
scrollAnimation.init();

const popover = new PopOver('[data-popover="open"]');
popover.init();

const options = {
  behavior: 'smooth',
  block: 'start'
}
const smoothScroll = new SmoothScroll('[data-smooth] a[href^="#"]', options);
smoothScroll.init();

const activateNavigation = new ActivateNavigation('[data-nav="active-nav"]', '[data-activate="content"]');
activateNavigation.init();

const verticalMenuNavigation = new VerticalMenuNavigation('[data-vertical-menu]', '[data-nav="vertical-menu"]', '[data-topic]');
verticalMenuNavigation.init();

const topButton = new SlidebackTopButton('[data-button="top-page"]');
topButton.init();


// Slides
const slide = new SlideNav('[data-slide="slide1"]', '[data-slide="slide-wrapper1"]');
slide.init();
slide.addArrow('[data-slide="prev1"]', '[data-slide="next1"]');
slide.addControl('[data-slide="custom-controls1"]');

const slide2 = new SlideNav('[data-slide="slide2"]', '[data-slide="slide-wrapper2"]');
slide2.init();
slide2.addArrow('[data-slide="prev2"]', '[data-slide="next2"]');
slide2.addControl('[data-slide="custom-controls2"]');

const slide3 = new SlideNav('[data-slide="slide3"]', '[data-slide="slide-wrapper3"]');
slide3.init();
slide3.addArrow('[data-slide="prev3"]', '[data-slide="next3"]');
slide3.addControl('[data-slide="custom-controls3"]');

const slide4 = new SlideNav('[data-slide="slide4"]', '[data-slide="slide-wrapper4"]');
slide4.init();
slide4.addArrow('[data-slide="prev4"]', '[data-slide="next4"]');
slide4.addControl('[data-slide="custom-controls4"]');

const slide5 = new SlideNav('[data-slide="slide5"]', '[data-slide="slide-wrapper5"]');
slide5.init();
slide5.addArrow('[data-slide="prev5"]', '[data-slide="next5"]');
slide5.addControl('[data-slide="custom-controls5"]');

const slide6 = new SlideNav('[data-slide="slide6"]', '[data-slide="slide-wrapper6"]');
slide6.init();
slide6.addArrow('[data-slide="prev6"]', '[data-slide="next6"]');
slide6.addControl('[data-slide="custom-controls6"]');

const slide7 = new SlideNav('[data-slide="slide7"]', '[data-slide="slide-wrapper7"]');
slide7.init();
slide7.addArrow('[data-slide="prev7"]', '[data-slide="next7"]');
slide7.addControl('[data-slide="custom-controls7"]');

const slide8 = new SlideNav('[data-slide="slide8"]', '[data-slide="slide-wrapper8"]');
slide8.init();
slide8.addArrow('[data-slide="prev8"]', '[data-slide="next8"]');
slide8.addControl('[data-slide="custom-controls8"]');

const slide9 = new SlideNav('[data-slide="slide9"]', '[data-slide="slide-wrapper9"]');
slide9.init();
slide9.addArrow('[data-slide="prev9"]', '[data-slide="next9"]');
slide9.addControl('[data-slide="custom-controls9"]');

const slide10 = new SlideNav('[data-slide="slide10"]', '[data-slide="slide-wrapper10"]');
slide10.init();
slide10.addArrow('[data-slide="prev10"]', '[data-slide="next10"]');
slide10.addControl('[data-slide="custom-controls10"]');
