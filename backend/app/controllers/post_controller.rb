class PostController < ApplicationController

  def index
    posts_original = Post.all

    posts = []
  
    posts_original.each do |post|
      post_ans = {}  # post_ansを初期化

      comment_number = post.comments.count
      post_user = User.find(post.user_id)
  
      post_ans["id"] = post.id
      # post_ans["user_id"] = post.user_id
      post_ans["title"] = post.title
      # post_ans["content"] = post.content
      post_ans["is_completed"] = post.is_completed
      post_ans["scope"] = post.scope
      post_ans["user_name"] = post_user.name
      post_ans["comment_number"] = comment_number
      # post_ans["created_at"] = post.created_at
      # post_ans["updated_at"] = post.updated_at
      



      posts << post_ans  # posts配列にデータを追加
    end
  
    render json: posts
  end

  def show 
    old_post = Post.find(params[:id])
    post_maker = User.find(old_post.user_id)

    old_comments = old_post.comments
    comments = []
    old_comments.each do |comment|
      comment_data = {}  # post_ansを初期化
      comment_maker = User.find(comment.user_id)
  
      comment_data["content"] = comment.content
      comment_data["is_best_answer"] = comment.is_best_answer
      comment_data["user_name"] = comment_maker.name
      comment_data["created_at"] = comment.created_at
      comment_data["updated_at"] = comment.updated_at
  
      comments << comment_data  # posts配列にデータを追加
    end

    post = {
      "id" => old_post.id,
      "title" => old_post.title,
      "content" => old_post.content,
      "is_completed" => old_post.is_completed,
      "scope" => old_post.scope,
      "user_name" => post_maker.name,
      "created_at" => old_post.created_at,
      "comments" => comments
    }
  
    render json: post
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