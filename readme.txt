Introduction -
--------------
 
This automation framework is designed to test OrangeHRM application(for web UI tests) and Herokuapp(for api tests).
Total 6 UI testcases and 2 API testcases have been developed in this framework. 
This framework generate various reports (Html, Allure) along with screenshots, trace and video.

Framework/Folder Structure
/data:
	- apiTestData.json: Contains credentials for API application (Herokuapp)
	- webTestData.json: Contains credentials and test data for Web application (OrangeHRM)
	- env.js: Environment file containing URL's of both API and Web application used for parametrizing URL's in testcases

/allure-report:
	- Contains allure reports
	
/fixtures:
	 - fixtures.js: Fixtures file that contains page objects and used in pages and testcases
	 
/pages:
	- login.js: Contains login page data (POM) i.e. login methods and locators
	- dashboard.js: Contains dashboard page data (POM) i.e. dashboard methods and locators
	- employee.js: Contains employee page data (POM) i.e. employee methods and locators
 
/playwright\.auth 
	- user.json: Authetication state file created by running "auth.setup.js" file. Used to handle existing authentication state 
 
/tests: 
	- api: createBooking.test.js(1 test) and getBookings.test.js(1 test) - 2 testcases created to handle POST and GET calls in this framework
	- ui: login.spec.js(2 tests), addEmployee.spec.js(1 test), deleteEmployee.spec.js(1 test), searchEmployee.spec.js(1 test) - 5 UI testcases
	- ui: visualTestComaparison.spec.js (1 test) - For visual testing purposes
	- auth.setup.js: Setup file used for authentication state. All testcases use same stored authentication state
	- Hooks & Tags: All required hooks and tags used in api and ui testcases
 
/package.json: 
	- Dependencies added: allure-playwright 
	- Scripts to run all tests: allTest, apiTests, uiTests, allure:generate
	
/playwright.config.js: 
	- Retries: 2 retries enabled for all testcases
	- trace, screenshot, video: enabled for all testcases
	- projects: setup.js (for storing auth state file)
	- browsers: chromium, firefox and webkit enabled for all testcases
	
Running the code commands:
	- All Testcases (in parallel):		 		 			"npx playwright test"
	- All UI Testcases (in parallel){use of Tags}: 	 		"npx playwright test --grep @uitests"  
	- All API Testcases (in parallel){use of Tags}:   		"npx playwright test --grep @apitests" 
	- All Testcases with browsers (in parallel): 			"npx playwright test --headed"
	- Running from package.json: 				 			"npm run allTest" or "npm run apiTests" or "npm run uiTests"