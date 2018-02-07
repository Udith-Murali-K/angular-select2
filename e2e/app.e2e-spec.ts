import { CoderPage } from './app.po';

describe('coder App', () => {
  let page: CoderPage;

  beforeEach(() => {
    page = new CoderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
