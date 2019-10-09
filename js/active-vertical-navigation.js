function insideMenu() {
	const verticalMenu = document.querySelector('[data-vertical-menu]');
	const navMenu = document.querySelector('[data-nav="vertical-menu"]');
	const topics = document.querySelectorAll('[data-topic]');
	const events = ['touchstart', 'click'];

	if (topics.length) {
		topics.forEach((topic, index, allTopics) => {
			const listItems = document.createElement('li');
			const links = document.createElement('a');
			const textLink = document.createElement('span');

			const topicsId = allTopics[index].getAttribute('id');
			const topicsTitle = allTopics[index].getAttribute('aria-label');
			textLink.innerText = topicsTitle;

			listItems.setAttribute('class', 'vertical-menu__item');
			links.setAttribute('class', 'vertical-menu__link');
			links.setAttribute('data-verticalMenu', 'link');
			links.setAttribute('href', '#' + topicsId);
			textLink.setAttribute('class', 'vertical-menu__text');

			listItems.appendChild(links);
			navMenu.appendChild(listItems);
			links.appendChild(textLink);
		})

		window.addEventListener('scroll', activeScroll);

		function activeScroll() {
			topics.forEach((topic) => {
				const start = topic.getBoundingClientRect().top - parseInt(window.getComputedStyle(topic).getPropertyValue('margin'));
				
				const end = start + topic.clientHeight;
				const id = topic.getAttribute('id');
				const $itemMenu = document.querySelector('[data-verticalMenu="link"][href="#' + id + '"]');

				if (topic.scrollTop > start && topic.scrollTop < end) {
					$itemMenu.classList.add('active')
				} else {
					$itemMenu.classList.remove('active')
				}
			})
		}

		const selectLinks = document.querySelectorAll('[data-verticalMenu="link"]');

		selectLinks.forEach((link) => {
			link.addEventListener('click', activeLinks);
		})

		function activeLinks(e) {
			selectLinks.forEach((link) => {
				link.classList.remove('active');
			})
			this.classList.add('active');
			outSideClick(this, events, () => {
				this.classList.remove('active');
			});
		}

		selectLinks.forEach((link) => {
			link.addEventListener('mouseover', showLinks);
			link.addEventListener('mouseout', hideLinks);
		})

		function showLinks() {
			selectLinks.forEach((link) => {
				link.classList.add('show');
			})
			verticalMenu.classList.add('active');
		}

		function hideLinks() {
			selectLinks.forEach((link) => {
				link.classList.remove('show');
			})
			verticalMenu.classList.remove('active');
		}
	}
}
insideMenu();


function outSideClick(element, events, callback) {
	const html = document.documentElement;
	const outside = 'data-outside';

	if (!element.hasAttribute(outside)) {
		events.forEach(userEvent => {
			setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
		});
		element.setAttribute(outside, '');
	}

	function handleOutsideClick(event) {
		if (!element.contains(event.target)) {
			element.removeAttribute(outside);
			events.forEach(userEvent => {
				html.removeEventListener(userEvent, handleOutsideClick);
			})
			callback();
		}
	}
}

