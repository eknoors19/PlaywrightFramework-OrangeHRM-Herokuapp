// pages/employee.js

export class EmployeePage {
  constructor(page) {
    this.page = page;
    this.addEmployeeButton = page.locator("(//button[normalize-space()='Add'])[1]");
    this.firstNameInput = page.locator("(//input[@placeholder='First Name'])[1]");
    this.lastNameInput = page.locator("(//input[@placeholder='Last Name'])[1]");
    this.saveButton = page.locator("(//button[normalize-space()='Save'])[1]");
    this.searchInput = page.locator("(//input[@placeholder='Type for hints...'])[1]");
    this.searchButton = page.locator("(//button[normalize-space()='Search'])[1]");
    this.employeeList = page.locator("(//div[@class='orangehrm-bottom-container'])[1]");
    this.deleteButton = page.locator("(//button[@class='oxd-icon-button oxd-table-cell-action-space']/i[@class='oxd-icon bi-trash'])[1]");
    this.confirmDeleteButton = page.locator("//i[@class='oxd-icon bi-trash oxd-button-icon']");
    this.dashboardLink = page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and text()='Dashboard']");
    this.saveConfirm = page.locator("//h6[@class='oxd-text oxd-text--h6 --strong']");
    this.searchName= page.locator("//input[@placeholder='Type for hints...']");
  }

  async addEmployee(firstName, lastName) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
    await this.page.waitForTimeout(5000);
  }

  async navigateToDashboard() {
    await this.dashboardLink.click();
    await this.page.waitForTimeout(3000);
  }

  async searchEmployee(employeeId) {
    await this.searchInput.fill(employeeId);
    await this.searchButton.click();
  }

  async deleteEmployee() {
    //await this.employeeList.first().locator("(//i[@class='oxd-icon bi-check oxd-checkbox-input-icon'])[1]").check();
    await this.deleteButton.click();
    await this.page.waitForTimeout(5000);
    await this.confirmDeleteButton.click();
  }

  async updateEmployee(firstName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }
}
