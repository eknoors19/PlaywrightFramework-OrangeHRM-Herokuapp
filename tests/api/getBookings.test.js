// tests/api/getBookings.test.js

const { test, request, expect } = require('@playwright/test');
const testData = require('../../data/apiTestData.json');

test.describe('API Tests - Get Bookings', () => {
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

  test('API - Get bookings',{tag:'@apitests'}, async ({request}) => {
    const response = await request.get('/booking', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toBeInstanceOf(Array);
  });

  test.afterAll(async () => {
    console.log('Get Bookings API Test executed');
   });
});
