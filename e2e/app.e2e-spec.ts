import { SearchImagesPage } from './app.po';

describe('search-images App', () => {
  let page: SearchImagesPage;

  beforeEach(() => {
    page = new SearchImagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
