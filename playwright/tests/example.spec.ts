import { test, expect } from '@playwright/test';

test('get simple get your request', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects')
  const responseObject = await response.json()
  console.log(responseObject)
  expect(responseObject.length).toBeGreaterThan(0)
  expect(response.status()).toBe(200)
  expect(responseObject[0].id).toBe('1')
});

test('get simple get your request by id', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects/7')
  const responseObject = await response.json()
  console.log(responseObject)
  expect(response.status()).toBe(200)
  expect(responseObject.id).toBe('7')
  expect(responseObject.name).toBe('Apple MacBook Pro 16')
});
