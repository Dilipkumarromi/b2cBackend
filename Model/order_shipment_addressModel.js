module.exports = (sequelize, DataTypes) => {
    const order_shipment_address = sequelize.define('order_shipment_address', {

        order_shipment_address_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        customer_entity_id:{type:DataTypes.INTEGER},
        first_name:{type:DataTypes.STRING},
        last_name:{type:DataTypes.STRING},
        street:{type:DataTypes.STRING},
        landmark:{type:DataTypes.STRING},
        city:{type:DataTypes.STRING},
        distric:{type:DataTypes.STRING},
        state:{type:DataTypes.STRING},
        zip:{type:DataTypes.STRING},
        contact_no:{type:DataTypes.STRING},

        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'order_shipment_address' },

    );
    return order_shipment_address
}