module.exports = (sequelize, DataTypes) => {
    const sub_variants = sequelize.define('sub_variants', {

        sub_variants_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        product_item_id: { type: DataTypes.INTEGER },
        sub_category_id: { type: DataTypes.INTEGER },

        items_name: { type: DataTypes.STRING },
        items_type: { type: DataTypes.STRING },
        
        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'sub_variants' },

    );
    return sub_variants
}