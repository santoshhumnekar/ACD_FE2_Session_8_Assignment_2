import { ValidationFormPage } from './app.po';

describe('validation-form App', function() {
  let page: ValidationFormPage;

  beforeEach(() => {
    page = new ValidationFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
