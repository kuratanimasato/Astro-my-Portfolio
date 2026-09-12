# Project Instructions

このプロジェクトは Astro の静的サイトです。

## Checks

変更後は次を実行すること。

````bash
npm run format:check
npm run check
npm run build

さらに GitHub Actions のルールも常に適用したい場合は、次を追加できます。

```md
## GitHub Actions

- `main` への push で品質チェックを実行する
- `main` への Pull Request で品質チェックを実行する
- `workflow_dispatch` による手動実行を許可する
- Node.js 22 と `npm ci` を使用する
- デプロイ処理は追加しない
````
