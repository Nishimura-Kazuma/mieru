class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  # validates :name, presence: true
  # validates :position, presence: true
end
