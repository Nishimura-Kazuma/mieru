class UserController < ApplicationController
  
  # def index
  #   main_user = User.find(1)
  #   old_comments = User.all
  #   users = []  # usersを初期化
  
  #   main_user_data = {}  # メインユーザーのデータを格納するハッシュ
  
  #   main_user_data["id"] = main_user.id
  #   main_user_data["name"] = main_user.name
  
  #   users << main_user_data  # users配列にメインユーザーのデータを追加
  
  #   comments = []
  
  #   old_comments.each do |comment_ans|
  #     comment_data = {}  # コメントのデータを格納するハッシュ
  
  #     comment_data["id"] = comment_ans.id
  #     comment_data["content"] = comment_ans.name
  
  #     comments << comment_data  # コメントをcomments配列に追加
  #   end
  
    # users_data = {
    #   "id" => main_user.id,    # メインユーザーのID
    #   "name" => main_user.name,  # メインユーザーの名前
    #   "comments" => comments    # メインユーザーに関連付けられたコメントの配列
    # }
  
  #   render json: [users_data]  # メインユーザーデータを配列に格納してJSONとして返す
  # end
  
  def show
    user = User.find(params[:id])
    render json: user
  end
end
