import { AppPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateToMain();
		expect(page.getParagraphText()).toEqual('Tour of Heroes');
	});

	it(`should display hero dashboard with top heroes`, () => {
		page.navigateToMain();
		expect(page.getHeroDashboardTitleText()).toContain('Top Heroes');
		expect(page.getTopHeroesCount()).toEqual(4);
	});

	it(`should be able to navigate to hero detail by clicking name item`, () => {
		page.navigateToMain();
		page.clickFirstHeroItem();
		expect(page.getHeroDetailTitle()).toEqual('NARCO Details');
	});

	it(`should be able to navigate to heroes list`, () => {
		page.clickHeroesListButton();
		expect(page.getHeroesListTitle()).toEqual('My Heroes');
		expect(page.getHeroesCount()).toEqual(10);
	});
});
