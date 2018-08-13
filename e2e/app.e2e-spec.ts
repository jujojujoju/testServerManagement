import { AgserverPage } from './app.po';

describe('agserver App', () => {
  let page: AgserverPage;

  beforeEach(() => {
    page = new AgserverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
