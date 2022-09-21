module.exports = (sequelize, DataTypes) => {
    const product_item = sequelize.define('product_item', {

        product_item_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        product_catelog_id: { type: DataTypes.INTEGER },
        // customer_entity_id integer
        werehouse_id: { type: DataTypes.INTEGER },
        items_images_id: { type: DataTypes.INTEGER },

        item_name: { type: DataTypes.STRING },
        stock_quantity: { type: DataTypes.INTEGER },
        orignal_price: { type: DataTypes.INTEGER },
        offered_price: { type: DataTypes.INTEGER },

        items_description: { type: DataTypes.STRING },
        expire_date: { type: DataTypes.STRING },

        // coupons varchar

        product_category_tier_id: { type: DataTypes.INTEGER },
        sku: { type: DataTypes.STRING },
        tagged_products: { type: DataTypes.STRING },


        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'product_item' },

    );
    return product_item
}