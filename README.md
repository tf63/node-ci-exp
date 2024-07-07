### next template

```
    # プロジェクトの作成
    pnpx create-next-app --ts frontend
    # パッケージのインストール
    pnpm install
    # 新規インストール
    pnpm install <package>
    # 開発サーバーの立ち上げ
    pnpm run dev
```

plopのインストール
```
    pnpm add -D plop
```

plopのtemplatesの作成
- `templates/`

jest, react-testing-libraryの導入
- https://qiita.com/masakiwakabayashi/items/204ed2b32254bbc9a5c1
- https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f
- https://qiita.com/ridai/items/d87d77e329644aad3086
```
    pnpm add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom ts-jest @types/jest
```

tsconfigの設定
- https://zenn.dev/nnt/articles/f69ce7a3492922


\*.test.tsと\*.spec.tsの使い分け
- https://zenn.dev/takashiaihara/articles/b35532a9f96c0c


### 参考
linter, formatterの設定
- https://zenn.dev/resistance_gowy/articles/91b4f62b9f48ec
