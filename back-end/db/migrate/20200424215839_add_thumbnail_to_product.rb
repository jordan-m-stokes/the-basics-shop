class AddThumbnailToProduct < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :thumbnail, :string
  end
end
