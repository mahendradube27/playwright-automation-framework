import { test, expect } from '@playwright/test';

test('Mocking Room Availability with route.fulfill', async ({ page }) => {
  
  // 1. Define the interception BEFORE navigating
  // We use a wildcard (*) for the dates so the script doesn't break when dates change
  await page.route('**/api/room?checkin=*&checkout=*', async (route) => {
    
    // 2. Create your custom "fake" response data
    const mockData = {
      rooms: [
        {
          roomid: 999,
          roomName: "Playwright Executive Suite",
          type: "Luxury",
          accessible: true,
          image: "https://www.mwtestconsultancy.co.uk/img/rbp/room1.jpg",
          description: "This room was injected via page.route()!",
          features: ["WiFi", "TV", "Mocked Coffee"],
          roomPrice: 1000
        }
      ]
    };

    // 3. Fulfill the request with your mock data
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockData),
    });
  });

  // 4. Navigate to the page
  await page.goto('https://automationintesting.online/');
  await page.pause()
  // 5. Verification: The UI should now show the "Playwright Executive Suite"
  const roomName = page.locator('text=Playwright Executive Suite');
  await expect(roomName).toBeVisible();
  
  console.log('Successfully intercepted and fulfilled the API request!');
});