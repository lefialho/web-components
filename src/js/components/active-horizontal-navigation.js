import debounce from './debounce.js';

export default class ActivateHorizontalNavigation {
	constructor(activeNav, navContents) {
		this.activeNav = document.querySelector(activeNav);
		this.navContents = document.querySelectorAll(navContents);
		this.activeClass = 'active';
		
		this.activeOnScroll = debounce(this.activeOnScroll.bind(this), 50);
	}

	createNavegation() {
		this.navContents.forEach((content) => {
			const listItems = document.createElement('li');
			const links = document.createElement('a');
			const contentsId = content.getAttribute('id');
			const contentsTitle = content.getAttribute('aria-label');

			listItems.setAttribute('class', 'horizontal-nav__item');
			links.setAttribute('class', 'horizontal-nav__link');
			links.setAttribute('data-horizontal-nav', 'link');
			links.setAttribute('href', '#' + contentsId);
			links.innerText = contentsTitle;

			listItems.appendChild(links);
			this.activeNav.appendChild(listItems);

			this.selectLinks = document.querySelectorAll('[data-horizontal-nav="link"]');
		})
	}

	activeOnScroll(event) {
		this.navContents.forEach((content) => {
			const contentStart = content.getBoundingClientRect().top - 50
			const contentMarginTop = content.offsetHeight;
			const contentEnd = contentStart + contentMarginTop;
			const contentId = content.getAttribute('id');
			const itemMenu = document.querySelector('[data-horizontal-nav="link"][href="#' + contentId + '"]');

			if (content.scrollTop > contentStart && content.scrollTop < contentEnd) {
				itemMenu.classList.add(this.activeClass)
			} else {
				itemMenu.classList.remove(this.activeClass)
			}
		})
	}

	activeLinks(link) {
		this.selectLinks.forEach((link) => {
			link.classList.remove(this.activeClass)
		})
		link.classList.add(this.activeClass)
	}

	init() {
		if (this.activeNav && this.navContents) {
			this.createNavegation();
			window.addEventListener('scroll', this.activeOnScroll);
		}
		return this;
	}
}