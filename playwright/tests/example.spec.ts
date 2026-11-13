import { test, expect } from '@playwright/test';

test('get simple get your request', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects')
  const responseObject = await response.json()
  console.log(responseObject)
  expect(responseObject.length).toBeGreaterThan(0)
  expect(response.status()).toBe(200)
  expect(responseObject[0].id).toBe('1')
});
