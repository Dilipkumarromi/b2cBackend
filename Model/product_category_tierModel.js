module.exports = (sequelize, DataTypes) => {
    const product_category_tier = sequelize.define('product_category_tier', {

        product_category_tier_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        product_item_id:{type:DataTypes.INTEGER},
        sub_category_id:{type:DataTypes.INTEGER},
        items_tier_type:{type:DataTypes.STRING},       
        
        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'product_category_tier' },

    );
    return product_category_tier
}