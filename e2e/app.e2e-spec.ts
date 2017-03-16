import { FormControlsPage } from './app.po';

describe('form-controls App', function() {
  let page: FormControlsPage;

  beforeEach(() => {
    page = new FormControlsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
