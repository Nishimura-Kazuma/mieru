class UserController < ApplicationController
  
  # def index
  #   users_original = User.all
  #   users = []  # usersを初期化
  
  #   users_original.each do |user|
  #     user_ans = {}  # user_ansを初期化
  #     second_user = User.find(user.id)  # この行が正しいか確認してください
  
  #     user_ans["id"] = user.id
  #     user_ans["name"] = user.name
  #     user_ans["second_name"] = second_user.name
  
  #     users << user_ans  # users配列にデータを追加
  #   end
  #     render json: users
  # end

  
  def show
    user = User.find(params[:id])
    render json: user
  end
end
