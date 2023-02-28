import { Selector } from 'testcafe';
import LoginPage from './loginPage';

const loginPage = new LoginPage();

fixture`Login Test`
  .page`https://www.saucedemo.com/`
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

test('should display an error message for invalid login credentials', async (t) => {
  await loginPage.submitLoginForm('standard_user', 'invalid_password');
  const errorMessage = await loginPage.getErrorMessage();
  await t.expect(errorMessage).eql('Epic sadface: Username and password do not match any user in this service');
});

test('should login successfully for valid credentials', async (t) => {
  await loginPage.submitLoginForm('standard_user', 'secret_sauce');
  const inventoryPageTitle = Selector('.inventory_item_name').innerText;
  await t.expect(inventoryPageTitle).eql('Sauce Labs Backpack');
});
