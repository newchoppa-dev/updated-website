import { Page, Locator } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly title: Locator;
  readonly navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1');
    this.navLinks = page.locator('nav button');
  }

  async goto() {
    await this.page.goto('https://newchoppa-dev.github.io/updated-website/#/');
  }

  async goToContacts() {
    await this.page.getByText('Контакти').click();
  }
}