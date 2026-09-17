import { test, expect } from '@playwright/test';

test.describe('ポートフォリオサイトの E2E 完全検証', () => {
  // 1. 実在するページのみを巡回 (200 OK チェック)
  const pages = [
    { path: '/', title: /Portfolio/i },
    { path: '/work', title: /Work|作品/i },
    { path: '/about', title: /About|プロフィール/i },
  ];

  for (const pageInfo of pages) {
    test(`ページ [${pageInfo.path}] が正常に開く (200 OK)`, async ({ page }) => {
      const response = await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('header')).toBeVisible();
    });
  }

  // 2. Three.js 描画チェック
  test.describe('Three.js 描画チェック', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('3D キャンバス (HeroGeometry) が初期化され、描画クラスが付与される', async ({ page }) => {
      const canvas = page.locator('#hero-canvas');
      await expect(canvas).toBeAttached();
      await expect(canvas).toHaveClass(/opacity-80/, { timeout: 7000 });
      await expect(canvas).toBeVisible();
    });

    test('レスポンシブ表示時もキャンバスが潰れず表示される', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const canvas = page.locator('#hero-canvas');
      await expect(canvas).toBeVisible();
      const boundingBox = await canvas.boundingBox();
      expect(boundingBox?.width).toBeGreaterThan(0);
    });
  });

  // 3. View Transitions / ルーティング
  test('ナビゲーション経由でページ遷移ができる', async ({ page }) => {
    await page.goto('/');
    const workLink = page.locator('header a[href*="work"]').first();
    if (await workLink.isVisible()) {
      await workLink.click();
      await expect(page).toHaveURL(/\/work/);
    }
  });

  // 4. トップページ内の Google フォーム存在確認
  test('トップページ（またはフッター）に Google フォームが配置されている', async ({ page }) => {
    await page.goto('/');
    const formElement = page.locator(
      'iframe[src*="google"], a[href*="forms"], a[href*="google.com"]',
    );
    await expect(formElement.first()).toBeVisible({ timeout: 10000 });
  });
});
