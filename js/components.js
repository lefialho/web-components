"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}!function(t){"function"==typeof define&&define.amd?define("main",t):t()}(function(){var t=function(){function e(t){_classCallCheck(this,e),this.accordionGroup=document.querySelectorAll(t)}return _createClass(e,[{key:"accordionConfig",value:function(){this.accordionGroup.forEach(function(t){var i=t.querySelectorAll('[data-accordion="item"]'),n="active";function e(){var e=this;i.forEach(function(t){e.classList.contains(n)||(t.classList.remove(n),t.nextElementSibling.classList.remove(n))}),this.classList.toggle(n),this.nextElementSibling.classList.toggle(n)}i[0].classList.add(n),i[0].nextElementSibling.classList.add(n),i.forEach(function(t){t.addEventListener("click",e)})})}},{key:"init",value:function(){return this.accordionGroup.length&&this.accordionConfig(),this}}]),e}(),e=function(){function e(t){_classCallCheck(this,e),this.collapseGroup=document.querySelectorAll(t)}return _createClass(e,[{key:"collapseConfig",value:function(){this.collapseGroup.forEach(function(t){var e=t.querySelectorAll('[data-collapse="item"]');function i(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("active")}e.forEach(function(t){t.addEventListener("click",i)})})}},{key:"init",value:function(){return this.collapseGroup.length&&this.collapseConfig(),this}}]),e}(),i=function(){function e(t){_classCallCheck(this,e),this.tabsGroup=document.querySelectorAll(t)}return _createClass(e,[{key:"tabConfig",value:function(){this.tabsGroup.forEach(function(t){var e=t.querySelectorAll('[data-tab="nav"] [data-tab="item"]'),i=t.querySelectorAll('[data-tab="content"]');e.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),n(),s(e)})});var n=function(){e.forEach(function(t){t.classList.remove("active")}),i.forEach(function(t){t.classList.remove("active")})},s=function(t){t.classList.add("active");var e=t.querySelector('[data-tab="link"]').getAttribute("href");document.querySelector(e).classList.add("active")}})}},{key:"init",value:function(){return this.tabsGroup.length&&this.tabConfig(),this}}]),e}(),n=function(){function n(t,e,i){_classCallCheck(this,n),this.openModalButton=document.querySelectorAll(t),this.closeModalButton=document.querySelectorAll(e),this.containerModal=document.querySelectorAll(i),this.body=document.querySelector("body"),this.activeClass="active",this.openModal=this.openModal.bind(this),this.closeModal=this.closeModal.bind(this)}return _createClass(n,[{key:"openModal",value:function(t){var e=this;t.preventDefault();var i=t.currentTarget.getAttribute("aria-controls");document.querySelectorAll(i).forEach(function(t){t.classList.add(e.activeClass)}),this.body.classList.add("has-modal")}},{key:"closeModal",value:function(){var e=this;this.containerModal.forEach(function(t){t.classList.remove(e.activeClass)}),this.body.classList.remove("has-modal")}},{key:"clickOutsideModal",value:function(t){event.target===t&&this.closeModal()}},{key:"addModalEvents",value:function(){var e=this;this.openModalButton.forEach(function(t){t.addEventListener("click",e.openModal)}),this.closeModalButton.forEach(function(t){t.addEventListener("click",e.closeModal)}),this.containerModal.forEach(function(t){t.addEventListener("click",function(){return e.clickOutsideModal(t)})})}},{key:"init",value:function(){return this.openModalButton.length&&this.closeModalButton.length&&this.containerModal.length&&this.addModalEvents(),this}}]),n}();function s(e,i,n){var s=document.documentElement,a="data-outside";function o(t){e.contains(t.target)||(e.removeAttribute(a),i.forEach(function(t){s.removeEventListener(t,o)}),n())}e.hasAttribute(a)||(i.forEach(function(t){setTimeout(function(){return s.addEventListener(t,o)})}),e.setAttribute(a,""))}var a=function(){function i(t,e){_classCallCheck(this,i),this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["click"]:e,this.activeClass="active",this.activeDropDown=this.activeDropDown.bind(this)}return _createClass(i,[{key:"activeDropDown",value:function(t){var e=this;t.preventDefault();var i=t.currentTarget;i.classList.toggle(this.activeClass),i.nextElementSibling.classList.toggle(this.activeClass),s(i,this.events,function(){i.classList.remove(e.activeClass),i.nextElementSibling.classList.remove(e.activeClass)})}},{key:"addDropDownEvent",value:function(){var i=this;this.dropdownMenus.forEach(function(e){i.events.forEach(function(t){e.addEventListener(t,i.activeDropDown)})})}},{key:"init",value:function(){return this.dropdownMenus.length&&this.addDropDownEvent(),this}}]),i}(),o=function(){function a(t,e,i,n,s){_classCallCheck(this,a),this.menuMobileButton=document.querySelector(t),this.menuList=document.querySelector(e),this.menuClose=document.querySelectorAll(i),this.activeClass=s,this.openMenu=this.openMenu.bind(this),this.closeMenu=this.closeMenu.bind(this)}return _createClass(a,[{key:"openMenu",value:function(){this.menuMobileButton.classList.toggle(this.activeClass),this.menuList.classList.toggle(this.activeClass),this.bgBlack.classList.toggle(this.activeClass)}},{key:"bgBlackCreation",value:function(){var t=document.createElement("div");t.setAttribute("class","bg-black"),t.setAttribute("data","bgBlack"),document.querySelector("body").appendChild(t),this.bgBlack=document.querySelector('[data="bgBlack"]')}},{key:"closeMenu",value:function(){this.bgBlack.classList.remove(this.activeClass),this.menuMobileButton.classList.remove(this.activeClass),this.menuList.classList.remove(this.activeClass)}},{key:"addMenuMobileEvents",value:function(){var e=this;this.menuMobileButton.addEventListener("click",this.openMenu),this.menuClose.forEach(function(t){t.addEventListener("click",e.closeMenu)}),this.bgBlack.addEventListener("click",this.closeMenu)}},{key:"init",value:function(){return this.menuMobileButton&&this.menuList&&(this.bgBlackCreation(),this.addMenuMobileEvents()),this}}]),a}();function c(n,s){var a;return function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];a&&clearTimeout(a),a=setTimeout(function(){n.apply(void 0,e),a=null},s)}}var r=function(){function e(t){_classCallCheck(this,e),this.sections=document.querySelectorAll(t),this.halfWindow=.6*window.innerHeight,this.activeClass="active",this.checkDistance=c(this.checkDistance.bind(this),50)}return _createClass(e,[{key:"getDistance",value:function(){var i=this;this.distance=_toConsumableArray(this.sections).map(function(t){var e=t.offsetTop;return{element:t,offset:Math.floor(e-i.halfWindow)}})}},{key:"checkDistance",value:function(){var e=this;this.distance.forEach(function(t){window.pageYOffset>t.offset?t.element.classList.add(e.activeClass):t.element.classList.contains(e.activeClass)&&t.element.classList.remove(e.activeClass)})}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}(),l=function(){function i(t,e){_classCallCheck(this,i),this.popovers=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="active",this.activatePopOver=this.activatePopOver.bind(this)}return _createClass(i,[{key:"activatePopOver",value:function(t){var e=this;t.preventDefault();var i=t.currentTarget;i.nextElementSibling.classList.toggle(this.activeClass),s(i.nextElementSibling,this.events,function(){i.nextElementSibling.classList.remove(e.activeClass)})}},{key:"addPopOverEvent",value:function(){var i=this;this.popovers.forEach(function(e){i.events.forEach(function(t){e.addEventListener(t,i.activatePopOver)})})}},{key:"init",value:function(){return this.popovers.length&&this.addPopOverEvent(),this}}]),i}(),d=function(){function i(t,e){_classCallCheck(this,i),this.insideLinks=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}return _createClass(i,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var e=this;this.insideLinks.forEach(function(t){t.addEventListener("click",e.scrollToSection)})}},{key:"init",value:function(){return this.insideLinks.length&&this.addLinkEvent(),this}}]),i}(),u=function(){function i(t,e){_classCallCheck(this,i),this.activeNav=document.querySelector(t),this.navContents=document.querySelectorAll(e),this.activeClass="active",this.activeOnScroll=c(this.activeOnScroll.bind(this),50)}return _createClass(i,[{key:"createNavegation",value:function(){var a=this;this.navContents.forEach(function(t){var e=document.createElement("li"),i=document.createElement("a"),n=t.getAttribute("id"),s=t.getAttribute("aria-label");e.setAttribute("class","horizontal-nav__item"),i.setAttribute("class","horizontal-nav__link"),i.setAttribute("data-horizontal-nav","link"),i.setAttribute("href","#"+n),i.innerText=s,e.appendChild(i),a.activeNav.appendChild(e)})}},{key:"activeOnScroll",value:function(t){var a=this;this.navContents.forEach(function(t){var e=t.getBoundingClientRect().top-50,i=e+t.offsetHeight,n=t.getAttribute("id"),s=document.querySelector('[data-horizontal-nav="link"][href="#'+n+'"]');t.scrollTop>e&&t.scrollTop<i?s.classList.add(a.activeClass):s.classList.remove(a.activeClass)})}},{key:"activeLinksOnclick",value:function(){var e=this;this.selectLinks=document.querySelectorAll('[data-horizontal-nav="link"]'),this.selectLinks.forEach(function(t){t.addEventListener("click",function(){return e.activeLinks(t)})})}},{key:"activeLinks",value:function(t){var e=this;this.selectLinks.forEach(function(t){t.classList.remove(e.activeClass)}),t.classList.add(this.activeClass)}},{key:"init",value:function(){return this.activeNav&&this.navContents&&(this.createNavegation(),this.activeLinksOnclick(),window.addEventListener("scroll",this.activeOnScroll)),this}}]),i}(),h=function(){function s(t,e,i,n){_classCallCheck(this,s),this.verticalMenu=document.querySelector(t),this.navMenu=document.querySelector(e),this.topics=document.querySelectorAll(i),this.events=void 0===n?["click","touchstart"]:n,this.activeClass="active",this.activeOnScroll=c(this.activeOnScroll.bind(this),50),this.showLinks=this.showLinks.bind(this),this.hideLinks=this.hideLinks.bind(this)}return _createClass(s,[{key:"createNavegation",value:function(){var r=this;this.topics.forEach(function(t,e,i){var n=document.createElement("li"),s=document.createElement("a"),a=document.createElement("span"),o=i[e].getAttribute("id"),c=i[e].getAttribute("aria-label");n.setAttribute("class","vertical-nav__item"),s.setAttribute("class","vertical-nav__link"),s.setAttribute("data-vertical-nav","link"),s.setAttribute("href","#"+o),a.setAttribute("class","vertical-nav__text"),a.innerText=c,n.appendChild(s),r.navMenu.appendChild(n),s.appendChild(a)})}},{key:"activeOnScroll",value:function(){this.topics.forEach(function(t){var e=t.getBoundingClientRect().top-50,i=e+t.clientHeight,n=t.getAttribute("id"),s=document.querySelector('[data-vertical-nav="link"][href="#'+n+'"]');t.scrollTop>e&&t.scrollTop<i?s.classList.add("active"):s.classList.remove("active")})}},{key:"activeLinksOnclick",value:function(){var e=this;this.selectLinks=document.querySelectorAll('[data-vertical-nav="link"]'),this.selectLinks.forEach(function(t){t.addEventListener("click",function(){return e.activeLinks(t)})})}},{key:"activeLinks",value:function(t){var e=this;this.selectLinks.forEach(function(t){t.classList.remove(e.activeClass)}),t.classList.add(this.activeClass)}},{key:"selectLinksEvents",value:function(){var e=this;this.selectLinks.forEach(function(t){t.addEventListener("mouseover",e.showLinks),t.addEventListener("mouseout",e.hideLinks)})}},{key:"showLinks",value:function(){this.selectLinks.forEach(function(t){t.classList.add("show")}),this.verticalMenu.classList.add("active")}},{key:"hideLinks",value:function(){this.selectLinks.forEach(function(t){t.classList.remove("show")}),this.verticalMenu.classList.remove("active")}},{key:"init",value:function(){return this.verticalMenu&&this.navMenu&&this.topics&&(this.createNavegation(),this.activeLinksOnclick(),this.selectLinksEvents(),window.addEventListener("scroll",this.activeOnScroll)),this}}]),s}(),v=function(){function e(t){_classCallCheck(this,e),this.topButton=document.querySelector(t),this.acttiveClass="active",this.showButton=c(this.showButton.bind(this),50)}return _createClass(e,[{key:"showButton",value:function(){100<window.window.pageYOffset?this.topButton.classList.add(this.acttiveClass):this.topButton.classList.remove(this.acttiveClass)}},{key:"init",value:function(){return this.topButton&&window.addEventListener("scroll",this.showButton),this}}]),e}(),f=function(){function i(t,e){_classCallCheck(this,i),this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.distance={finalPosition:0,startX:0,movement:0},this.changeEvent=new Event("changeEvent"),this.activeClass="active"}return _createClass(i,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.distance.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0")}},{key:"updatePosition",value:function(t){return this.distance.movement=1.6*(this.distance.startX-t),this.distance.finalPosition-this.distance.movement}},{key:"onStart",value:function(t){var e;e="mousedown"===t.type?(t.preventDefault(),this.distance.startX=t.clientX,"mousemove"):(this.distance.startX=t.changedTouches[0].clientX,"touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(){var t="mousemove"===event.type?event.clientX:event.changedTouches[0].clientX,e=this.updatePosition(t);this.moveSlide(e)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.distance.finalPosition=this.distance.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){100<this.distance.movement&&void 0!==this.index.next?this.activeNextSlide():this.distance.movement<-100&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var e=this;this.slideArray=_toConsumableArray(this.slide.children).map(function(t){return{position:e.slidePosition(t),element:t}})}},{key:"slideIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.distance.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var e=this;this.slideArray.forEach(function(t){t.element.classList.remove(e.activeClass)}),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){this.slidesConfig(),this.changeSlide(this.index.active)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=c(this.onResize.bind(this),50)}}]),i}(),p=function(){function n(t,e){var i;return _classCallCheck(this,n),(i=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,t,e))).bindControlEvents(),i}return _inherits(n,f),_createClass(n,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.prevElement&&this.nextElement&&this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var i=document.createElement("ul");return i.dataset.control="slide",this.slideArray.forEach(function(t,e){i.innerHTML+='<li><a href="#slide'.concat(e+1,'">').concat(e+1,"</a></li>")}),this.wrapper.appendChild(i),i}},{key:"eventControl",value:function(t,e){var i=this;t.addEventListener("click",function(t){t.preventDefault(),i.changeSlide(e)}),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var e=this;this.controlArray.forEach(function(t){t.classList.remove(e.activeClass)}),this.controlArray[this.index.active].classList.add(this.activeClass),this.prevElement&&this.nextElement&&(this.controlArray[0].classList.contains(this.activeClass)?this.prevElement.classList.add("hide"):this.prevElement.classList.remove("hide"),this.controlArray[this.controlArray.length-1].classList.contains(this.activeClass)?this.nextElement.classList.add("hide"):this.nextElement.classList.remove("hide"))}},{key:"addControl",value:function(t){this.slideArray&&(this.control=document.querySelector(t)||this.createControl(),this.controlArray=_toConsumableArray(this.control.children),this.activeControlItem(),this.controlArray.forEach(this.eventControl))}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}},{key:"init",value:function(){return this.slide&&(this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0),this.onResize()),this}}]),n}();new t('[data-accordion="group"]').init(),new e('[data-collapse="group"]').init(),new i('[data-tab="group"]').init(),new n('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),new a('[data-dropdown="link"]').init(),new o('[data-menu="button"]','[data-menu="list"]','[data-menu="close"]',"[data-bgblack]","active").init(),new r('[data-anime^="scroll"]').init(),new l('[data-popover="open"]').init();new d('[data-smooth] a[href^="#"]',{behavior:"smooth",block:"start"}).init(),new u('[data-nav="horizontal-nav"]','[data-activate="horizontal-nav"]').init(),new h('[data-nav="vertical-nav"]','[data-list="vertical-list"]','[data-activate="vertical-nav"]').init(),new v('[data-button="top-page"]').init();var m=new p('[data-slide="slide1"]','[data-slide="slide-wrapper1"]');m.init(),m.addArrow('[data-slide="prev1"]','[data-slide="next1"]'),m.addControl('[data-slide="custom-controls1"]');var y=new p('[data-slide="slide2"]','[data-slide="slide-wrapper2"]');y.init(),y.addArrow('[data-slide="prev2"]','[data-slide="next2"]'),y.addControl('[data-slide="custom-controls2"]');var k=new p('[data-slide="slide3"]','[data-slide="slide-wrapper3"]');k.init(),k.addArrow('[data-slide="prev3"]','[data-slide="next3"]'),k.addControl('[data-slide="custom-controls3"]');var C=new p('[data-slide="slide4"]','[data-slide="slide-wrapper4"]');C.init(),C.addArrow('[data-slide="prev4"]','[data-slide="next4"]'),C.addControl('[data-slide="custom-controls4"]');var E=new p('[data-slide="slide5"]','[data-slide="slide-wrapper5"]');E.init(),E.addArrow('[data-slide="prev5"]','[data-slide="next5"]'),E.addControl('[data-slide="custom-controls5"]');var b=new p('[data-slide="slide6"]','[data-slide="slide-wrapper6"]');b.init(),b.addArrow('[data-slide="prev6"]','[data-slide="next6"]'),b.addControl('[data-slide="custom-controls6"]');var L=new p('[data-slide="slide7"]','[data-slide="slide-wrapper7"]');L.init(),L.addArrow('[data-slide="prev7"]','[data-slide="next7"]'),L.addControl('[data-slide="custom-controls7"]');var g=new p('[data-slide="slide8"]','[data-slide="slide-wrapper8"]');g.init(),g.addArrow('[data-slide="prev8"]','[data-slide="next8"]'),g.addControl('[data-slide="custom-controls8"]');var w=new p('[data-slide="slide9"]','[data-slide="slide-wrapper9"]');w.init(),w.addArrow('[data-slide="prev9"]','[data-slide="next9"]'),w.addControl('[data-slide="custom-controls9"]');var S=new p('[data-slide="slide10"]','[data-slide="slide-wrapper10"]');S.init(),S.addArrow('[data-slide="prev10"]','[data-slide="next10"]'),S.addControl('[data-slide="custom-controls10"]')});