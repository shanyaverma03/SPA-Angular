import { browser } from "protractor";

describe('Home Page', ()=>{

  fit('Should navigate to the dashboard', ()=>{
    browser.get('/');
    expect(browser.getCurrentUrl()).toContain('/dashboard');
  });
  
  it('Should have the correct title', ()=>{
    browser.get(browser.baseUrl);
    expect(browser.getTitle()).toBe('Alert News');
  });
});