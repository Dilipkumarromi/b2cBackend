module.exports = (sequelize, DataTypes) => {
    const unit_of_measurement = sequelize.define('unit_of_measurement', {

        unit_of_measurement_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        product_item_id: { type: DataTypes.INTEGER },
        name: { type: DataTypes.STRING },
        symbol: { type: DataTypes.STRING },
        
        isActive: { type: DataTypes.BOOLEAN }

    },

        { tableName: 'unit_of_measurement' },

    );
    return unit_of_measurement
}