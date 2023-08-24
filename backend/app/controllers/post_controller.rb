class PostController < ApplicationController

  def index
    posts = Post.all
    render json: posts
  end

  def show 
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