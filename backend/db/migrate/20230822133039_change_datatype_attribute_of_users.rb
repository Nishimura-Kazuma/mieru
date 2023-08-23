class ChangeDatatypeAttributeOfUsers < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :attribute, :string
  end
end
