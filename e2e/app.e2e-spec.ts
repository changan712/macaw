import { MacawPage } from './app.po';

describe('macaw App', () => {
  let page: MacawPage;

  beforeEach(() => {
    page = new MacawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
