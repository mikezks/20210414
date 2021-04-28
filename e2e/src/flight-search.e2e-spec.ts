import { browser, by, element, ElementFinder } from "protractor";

describe('Flight Search E2E Test', () => {
  let from: ElementFinder;
  let to: ElementFinder;
  let search: ElementFinder;
  let flights: ElementFinder[];
  let firstFlight: ElementFinder;
  let card: ElementFinder;

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost:4299');
    await browser.waitForAngularEnabled(true);
    // Maximize browser to show sidebar and flight-search item
    await browser.manage().window().maximize();

    // Navigate to flight-search component
    const navigate = await element(by.css('[href="/flight-booking"]'));
    await navigate.click();

    from = await element(by.css('input[name=from]'));
    await from.clear();
    await from.sendKeys('Graz');

    to = await element(by.css('input[name=to]'));
    await to.clear();
    await to.sendKeys('Hamburg');

    search = await element(by.cssContainingText('button', 'Search'));
    await search.click();

    flights = await element.all(by.tagName('app-flight-card'));
    firstFlight = flights[0];
    card = await firstFlight.element(by.css('div.card'));
  });

  it('should show one flight card after search', async () => {
    expect(flights.length).toBe(1);
  });
});
