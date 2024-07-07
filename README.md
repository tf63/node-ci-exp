# NodeのCIを試すだけ

**`actions/setup-node@v3`を使う**

https://github.com/actions/setup-node/tree/main

**node_modulesをキャッシュする**

## キャッシュの再検証

キャッシュのキーに`package-lock.json`のハッシュ値を使用している

![alt text](img/README.png)

## 備考

**npm installは`package-lock.json`を更新する**

-   `npm ci`を使った方が良い
-   `setup-node`のサンプルでも`npm ci`を使っている
    https://qiita.com/mstssk/items/8759c71f328cab802670
