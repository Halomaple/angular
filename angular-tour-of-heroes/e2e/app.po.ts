import { browser, by, element } from 'protractor';

export class AppPage {
	navigateToMain() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('app-root h1')).getText();
	}

	getHeroDashboardTitleText() {
		return element(by.css('app-dashboard h3')).getText();
	}

	getTopHeroesCount() {
		return element.all(by.css('app-dashboard div a')).count();
	}

	getHeroDetailTitle() {
		return element(by.css('app-hero-detail div h2')).getText();
	}

	clickFirstHeroItem() {
		element(by.css('app-dashboard div a:first-child')).click();
	}

	clickHeroesListButton() {
		element(by.css('app-root nav a:last-child')).click();
	}

	getHeroesListTitle() {
		return element(by.css('app-heroes h2')).getText();
	}

	getHeroesCount() {
		return element.all(by.css('app-heroes ul li')).count();
	}
}
