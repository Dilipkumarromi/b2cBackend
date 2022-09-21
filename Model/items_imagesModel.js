module.exports = (sequelize, DataTypes) => {
    const items_images = sequelize.define('items_images', {

        items_images_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },       
         
        sub_category_id:{type:DataTypes.INTEGER},
        product_item_id:{type:DataTypes.INTEGER},
        
        front_image:{type:DataTypes.STRING},
        back_image:{type:DataTypes.STRING},
        
        left_image:{type:DataTypes.STRING},
        right_image:{type:DataTypes.STRING},
        
        up_image:{type:DataTypes.STRING},
        down_image:{type:DataTypes.STRING},
        
        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'items_images' },

    );
    return items_images
}