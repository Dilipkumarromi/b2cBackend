module.exports=(sequelize,DataTypes)=>{
    const courier_tracking=sequelize.define('courier_tracking',{
        
        courier_tracking_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},       
        customer_entity_id:{type:DataTypes.INTEGER},
        order_shipment_address_id:{type:DataTypes.INTEGER},
        product_item_id:{type:DataTypes.INTEGER},
        
        docket_no:{type:DataTypes.STRING},
        curier_partner_name:{type:DataTypes.STRING},
        curier_partner_contact_no:{type:DataTypes.INTEGER},
        shipment_date_time:{type:DataTypes.STRING},
        isConfrmDispatch:{type:DataTypes.BOOLEAN},
        
        delivery_date_time:{type:DataTypes.STRING},
        delivery_status:{type:DataTypes.STRING},
        delivery_return_desc:{type:DataTypes.STRING},
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'courier_tracking'} ,    
     
    );
    return courier_tracking
}