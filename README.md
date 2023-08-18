# react-rails-web-app

**Last Update: August 18th, 2023**

Team E の開発用リポジトリ

## ローカルでの環境構築

### 前提条件

- MacOS, Ubuntu など、Unix 系コマンドの使える環境で環境構築を行うことを前提とします。
- Docker が使える環境であることを前提とします。
- Git が使える環境であることを前提とします。
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

  ブラウザで [localhost:3000](http://localhost:3000/) にアクセスした際に、以下のような文字列が表示されていれば正しく動作しています。

  ***

  ToDo List

  - sample1
  - sample2
  - sample3

  ***

- React の終了

  ターミナル上で `control` + `C` キーにより React を終了する。

- コンテナから出る
  ```sh
  exit
  ```

#### Docker コンテナの終了

```sh
docker compose down
```

---

## 開発時の操作マニュアル (最低限)

### 最初の準備

#### プロジェクトディレクトリへの移動

```sh
cd [react-rails-web-app へのパス]
```

#### Docker コンテナの起動

```sh
docker compose up -d
```

#### 作業ブランチへの移動

```sh
git checkout [作業ブランチ名]
```

あるいは

```sh
git switch [作業ブランチ名]
```

リモートリポジトリで作成したブランチをローカルに取り込む場合は、以下のコマンドを打つ。

```sh
git fetch --all
```

**main ブランチで作業しないよう注意！！**

#### 作業ブランチの更新

```sh
git pull origin [作業ブランチ名]
```

### フロントエンドの開発

#### フロントエンドのコンテナ (front) へ入る

```sh
docker compose exec front bash
```

#### mode_modules のファイル更新

`frontend/app/package.json` が更新されている場合に以下のコマンドを打つことが必要です。
念のため毎回打つのが安心だと思います。

```sh
npm install
```

#### React の起動

```sh
npm start
```

#### 作業

- ブラウザで [localhost:3000](http://localhost:3000/) にアクセスし、フロントエンドのアプリケーション画面を開きながら開発します。React 関連のファイルを更新すると自動的に build され、アプリケーションの画面が更新されます。

- React を起動している間は先程まで使用していたターミナルが使用できなくなるため、別のターミナルを起動することをおすすめします。

- 作業が終了したら、`control` + `C` で React を終了させてください。

#### コンテナから出る

```sh
exit
```

### バックエンドの開発

#### バックエンドのコンテナ (api) へ入る

```sh
docker compose exec api bash
```

#### Gem の更新

`backend/Gemfile` が更新されている場合に以下のコマンドを打つことが必要です。
念のため毎回打つのが安心だと思います。

```sh
bundle install
```

#### 作業

- バックエンドのサーバーはすでに 3001 番ポートで動作しています。
  `rails s` コマンドを打つ必要はありません。
  ブラウザから [localhost:3001](http://localhost:3001/) にアクセスすることで動作確認などを行うことができます。

- 環境構築後の初期状態においては、[localhost:3001/samples](http://localhost:3001/samples)にアクセスすると、samples デーブルに格納されているデータが JSON 形式で表示されます。

#### コンテナから出る

```sh
exit
```

### Git 関連 (最低限)

VSCode の拡張機能などを利用すれば、CUI (Charactor User Interface) でなく GUI (Graphical User Interface) で git 関連の操作を行うことができます。
以下は、CUI (つまりターミナル) を用いる場合の操作方法です。

#### 追加/更新/削除したファイルを git に追加 (add)

```sh
git add [追加したいファイル/ディレクトリ]
```

#### 変更履歴を git にコメント付きで記録 (commit)

```sh
git commit -m "[コミットメッセージ]"
```

#### ローカルリポジトリの状態をリモートリポジトリへ反映 (push)

```sh
git push origin [push するブランチ名]
```

### 作業終了後の操作

#### コンテナの終了

```sh
docker compose down
```
