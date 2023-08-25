<br>
<br>
<br>
<div align="center">
  <img src="https://github.com/tier4/CARET_analyze/assets/96073800/6cf54abd-400c-40a6-bced-80660ac9b337" />
</div>
<br>
<br>
<br>
<br>
<br>

-----------------
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Ruby on Rails](https://img.shields.io/badge/Ruby%20on%20Rails-CC0000?logo=ruby-on-rails&logoColor=white)

# 特徴

- 保護者からの相談に対して、保育士と周りの保護者が協力して一緒に問題を解決するSNS

# 機能

#### 保護者ユーザー

- 相談を投稿できる（タイトル30字以内、内容300字以内）
- 投稿を公開する範囲を指定することができる（全員が見れる or 保育士だけ）
- 他の人が投稿した相談一覧を見ることができる
- 相談一覧から、回答したい投稿を選択し返信することができる
- 自分の投稿に寄せられた返信の中からベストアンサーを決めることができ、それによって相談を解決済みにすることができる
- 他者の投稿への返信数や、ベストアンサーに選ばれた数に応じてポイントが付与される
- 保育士からの返信には、保育士であることが分かるラベルが張られる

#### 保育士ユーザー

- 保護者が投稿した相談内容を見ることができる
- 公開範囲が保育士だけの投稿と、全員が見れる投稿の一覧を切り替えて表示することができる
- 相談一覧から、回答したい投稿を選択し返信することができる

# 構築の手順

## 前提条件

- MacOS, Ubuntu など、Unix 系コマンドの使える環境であること
- Docker が使える環境であること
- Git が使える環境であること
- 以下の手順において、`docker compose` の記述があるが、手元の docker-compose のバージョンが v1 である場合は、`docker compose` を `docker-compose` に書き換えて実行する

## 環境構築

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

#### `backend/config/database.yml` で読み込む環境ファイル `.env` の設定

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

- ※コンテナから出る場合
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

  ブラウザで [localhost:3000](http://localhost:3000/) にアクセスした際に、以下のような文字列が表示されていれば正しく動作しています。
  ***

  画像か何かを貼る予定

  ***

- React の終了

  ターミナル上で `control` + `C` キーにより React を終了する。

- ※コンテナから出る場合
  ```sh
  exit
  ```

---


### 作業終了後の操作

#### コンテナの終了

```sh
docker compose down
```



# 使用言語・パッケージ
### フロントエンド
- Typescript
- React
  
フロントエンドの各種バージョン情報の詳細は、frontend/app/package.jsonを参照

### バックエンド
- Ruby on rails
  
バックエンドの各種バージョン情報の詳細は、backend/Gemfileを参照




  
