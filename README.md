# react-rails-web-app

**Last Update: August 18th, 2023**

Team E の開発用リポジトリ

## ローカルでの環境構築

### 前提条件

- MacOS, Ubuntu など、Unix 系コマンドの使える環境で環境構築を行うことを前提とします。
- Docker が使える環境であることを前提とします。
- Github のプライベートリポジトリに ssh 接続して push, pull などの操作ができる状態になっていることを前提とします。(秘密鍵・公開鍵の設定、ユーザー名・メールアドレスの設定などが必要です。)
- 以下の手順において、`docker compose` の記述があります。お手元の docker-compose のバージョンが v1 である場合は、`docker compose` を `docker-compose` に書き換えてください。
- 以下、コードブロックに書かれたコマンドはすべてターミナル上で実行するものです。

### 構築の手順

#### リポジトリのクローン

```sh
git clone git@github.com:asahi1199/react-rails-web-app.git
```

#### クローンしたリポジトリへ移動

```sh
cd react-rails-web-app
```

#### `docker-compose.yml` で読み込む環境ファイル `development.env` の設定

- `development.env` ファイル作成 (プロジェクト直下)

  ```sh
  touch development.env
  ```

  注) `development.env` は `.gitignore` に記述されているため共有されません。

- `development.env` にデータベースのパスワードとタイムゾーンの情報を追加
  ```sh
  echo 'MYSQL_ROOT_PASSWORD=[任意のパスワード]' >> development.env
  echo 'TZ="Asia/Tokyo"' >> development.env
  ```

#### `backend/config/database.yml` で読み込む環境ファイルの設定

- `backend` ディレクトリへ移動

  ```sh
  cd backend
  ```

- `.env` ファイル作成 (backend ディレクトリ直下)

  ```sh
  touch .env
  ```

  注) `.env` は `.gitignore` に記述されているため共有されません。

- `.env` ファイルにデータベースのパスワード情報を追加
  ```sh
  echo 'MYSQL_ROOT_PASSWORD="[上で設定したものと同様のパスワード]"' >> .env
  ```

#### Docker イメージのビルドとコンテナの起動

- プロジェクトのルートディレクトリへ移動

  ```sh
  cd ../
  ```

- イメージ (front, api, db の 3 つ) のビルド

  ```sh
  docker compose build
  ```

- Docker コンテナの起動
  ```sh
  docker compose up -d
  ```

#### バックエンドのコンテナにおける処理

- バックエンド用のコンテナ (api) へ入る

  ```sh
  docker compose exec api bash
  ```

- コンテナ内でデータベースの作成・サンプル用データの投入

  ```sh
  rails db:create
  rails db:migrate
  rails db:seed
  rails db:migrate
  ```

- コンテナから出る
  ```sh
  exit
  ```

#### フロントエンドのコンテナにおける処理

- フロントエンド用のコンテナ (front) へ入る

  ```sh
  docker compose exec front bash
  ```

- コンテナ内で node_modules のデータをインストール

  ```sh
  npm install
  ```

- コンテナ内で React の実行

  ```sh
  npm start
  ```

- 動作確認

  ブラウザで [localhost:3000](http://localhost:3000/) にアクセスした際に、以下のような文字が表示されていれば正しく動作しています。

  ***

  ToDo List

  - sample1
  - sample2
  - sample3

  ***

- React の終了

  ターミナル上で `control + C` キーにより React を終了する。

- コンテナから出る
  ```sh
  exit
  ```

#### Docker コンテナの終了

```sh
docker compose down
```
