# GitHub Actions Rules

このプロジェクトでは、GitHub Actions の品質チェックを次の条件で実行する。

- `main` ブランチへの push で実行する
- `main` を対象とする Pull Request で実行する
- `workflow_dispatch` による手動実行を許可する
- Node.js 22 を使用する
- 依存関係のインストールには `npm ci` を使用する
- `npm run format:check` を実行する
- `npm run check` を実行する
- `npm run build` を実行する
- デプロイ処理は追加しない
- ワークフロー変更後は YAML の内容と実行方法を説明する
