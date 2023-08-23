class PostController < ApplicationController

  def index
    posts_original = Post.all
    posts = []
  
    posts_original.each do |post|
      post_ans = {}  # post_ansを初期化
      post_user = User.find(post.user_id)
  
      post_ans["id"] = post.id
      # post_ans["user_id"] = post.user_id
      post_ans["title"] = post.title
      # post_ans["content"] = post.content
      post_ans["is_completed"] = post.is_completed
      post_ans["scope"] = post.scope
      post_ans["user_name"] = post_user.name
      # post_ans["created_at"] = post.created_at
      # post_ans["updated_at"] = post.updated_at
  
      posts << post_ans  # posts配列にデータを追加
    end
  
    render json: posts
  end

  def show 
    post = Post.find(params[:id])
    render json: post
    comments = post.comments
  end

  def create
    new_post = Post.new(post_params)

    # 正しく保存できたかどうかをフロント側で確認できるようにデータを送る
    if new_post.save
      render json: { message: "request is received by server" }
    else
      render json: { message: "failed!!" }
    end

  end

  def update
  end

  def destroy
  end

end

private
  # ストロングパラメータ
  def post_params
    params.require(:post).permit(:user_id, :title, :content, :is_completed, :scope)
  end