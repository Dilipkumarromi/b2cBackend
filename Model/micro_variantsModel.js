module.exports = (sequelize, DataTypes) => {
    const micro_variants = sequelize.define('micro_variants', {

        micro_variants_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                
        product_item_id:{type:DataTypes.INTEGER},
        sub_category_id:{type:DataTypes.INTEGER},
        
        items_name:{type:DataTypes.STRING},
        items_type:{type:DataTypes.STRING},         
        
        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'micro_variants' },

    );
    return micro_variants
}