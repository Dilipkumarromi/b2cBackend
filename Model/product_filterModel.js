module.exports = (sequelize, DataTypes) => {
    const product_filter = sequelize.define('product_filter', {

        product_filter_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        
        product_item_id:{type:DataTypes.INTEGER},
        sub_category_id:{type:DataTypes.INTEGER},
        product_category_tier_id:{type:DataTypes.INTEGER},
        sub_variants_id:{type:DataTypes.INTEGER},
        
        items_alises:{type:DataTypes.STRING},
        tagged_products:{type:DataTypes.INTEGER},
        size:{type:DataTypes.STRING},
        // surface:{type:DataTypes.STRING},   
        
        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'product_filter' },

    );
    return product_filter
}