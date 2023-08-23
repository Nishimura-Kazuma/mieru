class CommentsController < ApplicationController
  def create
    # post = Post.find(params[:post_id])
    now_user = comment.user
    comment = now_user.comments.new(comment_params)
    
    # 正しく保存できたかどうかをフロント側で確認できるようにデータを送る
    if comment.save
      render json: { message: "request is received by server" }
    else
      render json: { message: "failed!!" }
    end

  end

  def update
  end

  def destroy
  end


  private
  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :content ,:is_best_answer)
  end

end
