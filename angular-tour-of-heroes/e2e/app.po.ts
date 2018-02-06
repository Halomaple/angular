import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('app-root h1')).getText();
	}

	getHeroesText() {
		return element(by.css('app-heroes div:last-child')).getText();
	}
}
