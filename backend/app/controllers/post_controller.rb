class PostController < ApplicationController

  def index
    posts = Post.all
    new_post = Post.new
      render json: {
      posts: posts,
      new_post: new_post
    }
  end

  def show 
  end

  def create
    
    post = Post.new(post_params)
    new_post = Post.new
    if post.save
      posts = Post.all

        render json: {
        posts: posts,
        new_post: new_post
      }
    else
      render json: {
        posts = Post.all
        posts: posts,
        new_post: new_post
      }
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