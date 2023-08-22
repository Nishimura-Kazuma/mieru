class PostController < ApplicationController

  def index
    @posts = Post.all
    @new_post = Post.new
  end

  def show 
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      @posts = Post.all
      @new_post = @post
      render :index
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
    params.require(:post).permit(:user_id,:title, :content, :is_completed)
  end