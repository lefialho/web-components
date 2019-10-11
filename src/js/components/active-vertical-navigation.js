import debounce from './debounce.js';

export default class ActivateVerticalNavigation {
	constructor(verticalMenu, navMenu, topics, events) {
		this.verticalMenu = document.querySelector(verticalMenu);
		this.navMenu = document.querySelector(navMenu);
		this.topics = document.querySelectorAll(topics);
		
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
		this.topics.forEach((topic, index, allTopics) => {
			const listItems = document.createElement('li');
			const links = document.createElement('a');
			const textLink = document.createElement('span');
			const topicsId = allTopics[index].getAttribute('id');
			const topicsTitle = allTopics[index].getAttribute('aria-label');
			
			listItems.setAttribute('class', 'vertical-nav__item');
			links.setAttribute('class', 'vertical-nav__link');
			links.setAttribute('data-vertical-nav', 'link');
			links.setAttribute('href', '#' + topicsId);
			textLink.setAttribute('class', 'vertical-nav__text');
			textLink.innerText = topicsTitle;

			listItems.appendChild(links);
			this.navMenu.appendChild(listItems);
			links.appendChild(textLink);

			this.selectLinks = document.querySelectorAll('[data-vertical-nav="link"]');
		})
	}

	activeOnScroll() {
		this.topics.forEach((topic) => {
			const start = topic.getBoundingClientRect().top - 50;
			const end = start + topic.clientHeight;
			const id = topic.getAttribute('id');
			const itemMenu = document.querySelector('[data-vertical-nav="link"][href="#' + id + '"]');

			if (topic.scrollTop > start && topic.scrollTop < end) {
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
		this.selectLinks.forEach((link) => {
			link.addEventListener('mouseover', this.showLinks);
			link.addEventListener('mouseout', this.hideLinks);
		})
	}

	showLinks() {
		this.selectLinks.forEach((link) => {
			link.classList.add('show');
		})
		this.verticalMenu.classList.add('active');
	}

	hideLinks() {
		this.selectLinks.forEach((link) => {
			link.classList.remove('show');
		})
		this.verticalMenu.classList.remove('active');
	}

	init() {
		if (this.verticalMenu && this.navMenu && this.topics) {
			this.createNavegation();
			this.selectLinksEvents();
			window.addEventListener('scroll', this.activeOnScroll);
		}
		return this
	}
}