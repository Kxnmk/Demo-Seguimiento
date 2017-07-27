import { JLCAPage } from './app.po';

describe('jlca App', () => {
  let page: JLCAPage;

  beforeEach(() => {
    page = new JLCAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
