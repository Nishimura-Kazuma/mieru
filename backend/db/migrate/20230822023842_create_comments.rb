class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer   :user_id, null: false
      t.integer   :post_id, null: false
      t.string   :content, null: false
      t.boolean   :is_best_answer, null: false,default: "false"
      t.timestamps
    end
  end
end
