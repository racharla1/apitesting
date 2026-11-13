import { test, expect } from '@playwright/test';

test('get simple get your request', async ({ request }) => {
  await request.get('https://jsonplaceholder.typicode.com/todos/1').then(async (response) => {i

});
