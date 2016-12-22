import { NgBDisimplePage } from './app.po';

describe('ng-b-disimple App', function() {
  let page: NgBDisimplePage;

  beforeEach(() => {
    page = new NgBDisimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
