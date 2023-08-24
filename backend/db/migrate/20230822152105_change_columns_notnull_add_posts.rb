class ChangeColumnsNotnullAddPosts < ActiveRecord::Migration[7.0]
  def change
    change_column :posts, :scope, :string, null: false
  end
end
