import { AppPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Tour of Heroes');
	});
});
