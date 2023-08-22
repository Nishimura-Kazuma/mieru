class Post < ApplicationRecord
  belongs_to :user
  
  validates :user_id, presence: true
  validates :title, presence: true
  validates :content, presence: true
  validates :is_completed, presence: true
end
