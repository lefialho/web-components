import debounce from './debounce.js';

export default class ActivateVerticalNavigation {
	constructor(verticalNav, navList, navContents, events) {
		this.verticalNav = document.querySelector(verticalNav);
		this.navList = document.querySelector(navList);
		this.navContents = document.querySelectorAll(navContents);
		
		if (events === undefined)
			this.events = ['click', 'touchstart'];
		else
			this.events = events;
		this.activeClass = 'active';

		this.activeOnScroll = debounce(this.activeOnScroll.bind(this), 50);
		this.showLinks = this.showLinks.bind(this);
		this.hideLinks = this.hideLinks.bind(this);
	}

	createNavegation() {
		this.navContents.forEach((content) => {
			const listItems = document.createElement('li');
			const links = document.createElement('a');
			const textLink = document.createElement('span');
			const navContentsId = content.getAttribute('id');
			const navContentsTitle = content.getAttribute('aria-label');
			
			listItems.setAttribute('class', 'vertical-nav__item');
			links.setAttribute('class', 'vertical-nav__link');
			links.setAttribute('data-vertical-nav', 'link');
			links.setAttribute('href', '#' + navContentsId);
			textLink.setAttribute('class', 'vertical-nav__text');
			textLink.innerText = navContentsTitle;
			
			listItems.appendChild(links);
			this.navList.appendChild(listItems);
			links.appendChild(textLink);

			this.selectLinks = document.querySelectorAll('[data-vertical-nav="link"]');
		})
	}

	activeOnScroll() {
		this.navContents.forEach((content) => {
			const start = content.getBoundingClientRect().top - 50;
			const end = start + content.clientHeight;
			const id = content.getAttribute('id');
			const itemMenu = document.querySelector('[data-vertical-nav="link"][href="#' + id + '"]');

			if (content.scrollTop > start && content.scrollTop < end) {
				itemMenu.classList.add('active')
			} else {
				itemMenu.classList.remove('active')
			}
		})
	}

	activeLinks(link) {
		this.selectLinks.forEach((link) => {
			link.classList.remove(this.activeClass);
		})
		link.classList.add(this.activeClass);
	}

	selectLinksEvents() {
		if(this.selectLinks) {
			this.selectLinks.forEach((link) => {
				link.addEventListener('mouseover', this.showLinks);
				link.addEventListener('mouseout', this.hideLinks);
			})
		}
	}

	showLinks() {
		this.selectLinks.forEach((link) => {
			link.classList.add('show');
		})
		this.verticalNav.classList.add('active');
	}

	hideLinks() {
		this.selectLinks.forEach((link) => {
			link.classList.remove('show');
		})
		this.verticalNav.classList.remove('active');
	}

	init() {
		if (this.verticalNav && this.navList && this.navContents) {
			this.createNavegation();
			this.selectLinksEvents();
			window.addEventListener('scroll', this.activeOnScroll);
		}
		return this
	}
}