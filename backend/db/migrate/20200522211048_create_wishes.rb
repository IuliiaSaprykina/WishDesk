class CreateWishes < ActiveRecord::Migration[6.0]
  def change
    create_table :wishes do |t|
      t.string :wish_type
      t.string :description
      t.text :image_url

      t.timestamps
    end
  end
end
