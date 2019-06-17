class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.string :name
      t.integer :price
      t.string :image
      t.string :location

      t.timestamps
    end
  end
end
