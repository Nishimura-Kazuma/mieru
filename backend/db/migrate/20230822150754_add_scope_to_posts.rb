class AddScopeToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :scope, :string
  end
end
