## ディレクトリ構造

### `src/`

アプリケーションの主要なコードが格納されているディレクトリ。

- **`assets/`**: 画像などの静的ファイルを格納。バックログ 6 まで使わなそう

- **`components/`**: 再利用可能な UI コンポーネントを格納。各コンポーネントは独自のディレクトリを持ち、その中にはコンポーネントのファイルが含まれる。

  - **`Header/`**:
    - `index.tsx`: メインのコンポーネントファイル。
  - **`Footer/`**:
    - `index.tsx`: メインのコンポーネントファイル。
  - **`PostList/`**:
    - `index.tsx`: 投稿のリストを表示するコンポーネント。
  - **`ReplyForm/`**:
    - `index.tsx`: 投稿への返信を行うためのフォームコンポーネント。
  - **`BestAnswerButton/`**:
    - `index.tsx`: ベストアンサーとして返信をマークするボタン。

- **`containers/`**: Redux のストアに接続されている、外部 API からデータを取得するコンポーネントを格納。例)コンポーネントの PostList にデータを渡す。

  - **`Home/`**:
    - `index.tsx`: ホームページのメインコンテナ。投稿のリストを取得して表示。
  - **`PostDetail/`**:
    - `index.tsx`: 単一の投稿とその返信の詳細を表示。
  - **`EditPost/`**:
    - `index.tsx`: 既存の投稿を編集するためのフォーム。

- **`pages/`**: アプリケーションの各ビュー/ページを表すコンポーネントを格納。

  - `HomePage.tsx`: アプリケーションのメインランディングページ。
  - `PostDetailPage.tsx`: 単一の投稿の詳細ビュー。
  - `EditPostPage.tsx`: 投稿を編集するページ。

- **`store/`**: Redux の状態管理に関連するものを格納。

  - **`actions/`**:
    - `postsActions.ts`: 投稿に関するアクションクリエーター。
  - **`reducers/`**:
    - `postsReducer.ts`: アクションを処理し、状態を更新するためのリデューサー。

- **`utils/`**: アプリケーション全体で使用されるユーティリティ関数や定数を格納。開発中に必要だったら使う。

- **`App.tsx`**: ルーティングや全体のレイアウトを設定するメインのアプリケーションコンポーネント。


## Code formatter 関連の追加コマンド

### `npm format [調査対象のファイル/ディレクトリへのパス]`

`.prettierrc.js` に従ったフォーマットになっているかを調べる。

### `npm format:fix [整形対象のファイル/ディレクトリへのパス]`

`.prettierrc.js` に従っていないファイルのフォーマット整形を行う。

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
- **`index.tsx`**: アプリケーションのエントリポイント。メインの App コンポーネントをレンダリングし、必要なプロバイダー（例: Redux Provider）でラップする。
