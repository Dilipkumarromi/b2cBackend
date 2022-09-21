module.exports=(sequelize,DataTypes)=>{
    const seller_details=sequelize.define('seller_details',{
        
        seller_details_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},       
        product_item_id:{type:DataTypes.INTEGER},  
        customer_entity_id:{type:DataTypes.INTEGER},
        items_images_id:{type:DataTypes.INTEGER},
        order_shipment_address_id:{type:DataTypes.INTEGER},
        saller_profile_id:{type:DataTypes.INTEGER},
        isConfirmOrder:{type:DataTypes.BOOLEAN},
        isDispached:{type:DataTypes.BOOLEAN},
          
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'seller_details'} ,    
     
    );
    return seller_details
}