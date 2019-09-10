import debounce from './debounce.js';

export default class ActivateNavigation {
	constructor(activeNav, navContents) {
		this.activeNav = document.querySelector(activeNav);
		this.navContents = document.querySelectorAll(navContents);
		this.activeClass = 'active'
		
		this.activeOnScroll = debounce(this.activeOnScroll.bind(this), 50);
	}

	createNavegation() {
		this.navContents.forEach((topic) => {
			const listItems = document.createElement('li');
			const links = document.createElement('a');
			const contentsId = topic.getAttribute('id');
			const contentsTitle = topic.getAttribute('title');

			links.innerText = contentsTitle;
			links.setAttribute('data-menu', 'activeLink');
			links.setAttribute('href', '#' + contentsId);

			listItems.appendChild(links);
			this.activeNav.appendChild(listItems);
		})
	}

	activeOnScroll(event) {
		this.navContents.forEach((content) => {
			const contentStart = content.getBoundingClientRect().top - parseInt(window.getComputedStyle(content).getPropertyValue('margin-top'));
			const contentMarginTop = content.offsetHeight;
			const contentEnd = contentStart + contentMarginTop;
			const contentId = content.getAttribute('id');
			const itemMenu = document.querySelector('[data-menu="activeLink"][href="#' + contentId + '"]');

			if (content.scrollTop > contentStart && content.scrollTop < contentEnd) {
				itemMenu.classList.add(this.activeClass)
			} else {
				itemMenu.classList.remove(this.activeClass)
			}
		})
	}

	activeLinksOnclick() {
		this.selectLinks = document.querySelectorAll('[data-menu="activeLink"]');
    
		this.selectLinks.forEach((link) => {
			link.addEventListener('click', () => this.activeLinks(link));
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
			this.activeLinksOnclick();
			window.addEventListener('scroll', this.activeOnScroll);
		}
		return this;
	}
}