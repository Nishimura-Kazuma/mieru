class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|

      t.integer   :user_id, null: false
      t.string   :title, null: false
      t.string   :content, null: false
      t.boolean   :is_completed, null: false,default: "false"
      t.timestamps
    end
  end
end

