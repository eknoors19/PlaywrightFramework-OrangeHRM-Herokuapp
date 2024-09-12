// tests/api/createBooking.test.js

const { test, request, expect } = require('@playwright/test');
const testData = require('../../data/apiTestData.json');

test.describe('API Tests - Booking', () => {
  let token;

  test.beforeAll(async ({request}) => {
    const response = await request.post('/auth', {
      data: {
        username: testData.apiUsername,
        password: testData.apiPassword,
      },
    });
    const body = await response.json();
    token = body.token;
  });

  test('API - Create a booking',{tag:'@apitests'}, async ({request}) => {
    const response = await request.post('/booking', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2023-01-01",
          checkout: "2023-01-02"
        },
        additionalneeds: "Breakfast"
      }
    });
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body.booking).toBeDefined();
  });
  
  test.afterAll(async () => {
    console.log('Create Booking API Test executed');
   });
});
