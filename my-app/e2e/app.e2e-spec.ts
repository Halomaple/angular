import { AppPage } from './app.po';

describe('my-app App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Welcome to My First Angular App!');
	});

	it('should show logo icon in a fit size', () => {
		page.navigateTo();

		page.getLogoIconWidth().then((eleSize) => {
			expect(eleSize.width).toEqual(300);
			expect(eleSize.height).toEqual(300);
		});
	});
});
