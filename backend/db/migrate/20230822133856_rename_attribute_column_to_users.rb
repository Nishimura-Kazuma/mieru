class RenameAttributeColumnToUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :attribute, :user_attribute
  end
end
