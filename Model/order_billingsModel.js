module.exports = (sequelize, DataTypes) => {
    const order_billings = sequelize.define('order_billings', {

        order_billings_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        customer_entity_id:{type:DataTypes.INTEGER},
        order_shipment_address_id:{type:DataTypes.INTEGER},
        product_item_id:{type:DataTypes.INTEGER},
        billing_status:{type:DataTypes.STRING},  
        
        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'order_billings' },

    );
    return order_billings
}