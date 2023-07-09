# NightwatchJS Mobile Automation

This project was developed to study and implement a test automation project of an mobile app.

## Prerequisites
To run this project  ensure that you have the following installed:

- Node.js: Make sure you have Node.js installed on your machine
- Appium 2: Make sure you have the Appium 2.x installed on your machine, it's recommended to use Appium Doctor to check the Appium installation.
- Virtual device: A virtual device to run the tests, this devicce must have the follwing capabiliteis:
    - Platform: Android,
    - Device Name: Pixel 2 API 28,
    - Platform Version: 9.0
- UiAutomator2:  Make sure you have the driver UiAutomator2 installed 

## Getting Started

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/VitorinoAlves/nightwatchjsMobileAutomationStudy.git

2. Navigate to the project directory:

3. Install the project dependencies:

   ```shell
   npm install

4. Create in the root a .env file with the follwing variables:

    ```shell
    USER_NAME = 'teste@teste.com'
    PASSWORD = '123456'

## Running the Tests

### Running the tests locally
To run the test scenarios in a virtual device locally, run the following command:

    npm run runAndroidTestsEmulator

### Running the tests in the Browserstack
To run the test scenarios in the Browserstack first create an accound in the Browserstack, and then follow the following steps:

1. Add to the .env file the follwing variables:

    ```shell
    BROWSERSTACK_USERNAME = 'yourUserName'
    BROWSERSTACK_KEY = 'yourKey'

2. Run the following command:

    ```shell
    npm run runAndroidTestsBrowserstack