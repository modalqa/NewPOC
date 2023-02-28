import { Selector, t } from 'testcafe';

export default class LoginPage {
  constructor() {
    this.usernameInput = Selector('#user-name');
    this.passwordInput = Selector('#password');
    this.loginButton = Selector('#login-button');
    this.errorMessage = Selector('.error-message-container');
  }

  async submitLoginForm(username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent;
  }
}
