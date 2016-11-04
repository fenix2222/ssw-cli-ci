import { SswCliCiPage } from './app.po';

describe('ssw-cli-ci App', function() {
  let page: SswCliCiPage;

  beforeEach(() => {
    page = new SswCliCiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
