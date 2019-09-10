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

const popover = new PopOver('[data-popover]');
popover.init();

const options = {
  behavior: 'smooth',
  block: 'end'
}
const smoothScroll = new SmoothScroll('[data-smooth] a[href^="#"]', options);
smoothScroll.init();

const activateNavigation = new ActivateNavigation('[data-nav="active-nav"]', '[data-activate="content"]');
activateNavigation.init();