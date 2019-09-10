export default class TabNav {
  constructor(tabGroup) {
    this.tabsGroup = document.querySelectorAll(tabGroup);
  }

  tabConfig() {
    this.tabsGroup.forEach((tab) => {
      const tabsMenu = tab.querySelectorAll('[data-tab="nav"] [data-tab="item"]');
      const TabsContent = tab.querySelectorAll('[data-tab="content"]');

      tabsMenu.forEach(tab => {
        tab.addEventListener("click", e => {
          e.preventDefault();
          removeActiveTab();
          addActiveTab(tab);
        })
      })

      const removeActiveTab = () => {
        tabsMenu.forEach(tab => {
          tab.classList.remove('active')
        })
        TabsContent.forEach(content => {
          content.classList.remove('active')
        })
      }

      const addActiveTab = tab => {
        tab.classList.add('active');
        const href = tab.querySelector('[data-tab="link"]').getAttribute('href');
        const matchingContent = document.querySelector(href);
        matchingContent.classList.add('active');
      }
    });
  }

  init() {
    if( this.tabsGroup.length) {
      this.tabConfig();
    }
    return this
  }
}
