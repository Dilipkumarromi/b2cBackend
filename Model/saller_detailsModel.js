module.exports=(sequelize,DataTypes)=>{
    const saller_details=sequelize.define('saller_details',{
        
        product_item_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        
         
        customer_entity_id:{type:DataTypes.INTEGER},
        items_images_id:{type:DataTypes.INTEGER},
        order_shipment_address_id:{type:DataTypes.INTEGER},
        
        isConfirmOrder:{type:DataTypes.BOOLEAN},
        isDispached:{type:DataTypes.BOOLEAN},
          
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'saller_details'} ,    
     
    );
    return saller_details
}