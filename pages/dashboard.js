// pages/dashboard.js

export class DashboardPage {
    constructor(page) {
      this.page = page;
      this.dashboardHeader = page.locator('h1:has-text("Dashboard")');
      this.pimLink = page.locator("(//span[normalize-space()='PIM'])[1]");
    }
  
    async navigateToPIM() {
      await this.pimLink.click();
    }
  }
  