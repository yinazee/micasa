class AddHomeIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :home_id, :integer
  end
end
