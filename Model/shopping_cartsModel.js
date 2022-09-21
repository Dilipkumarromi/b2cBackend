module.exports=(sequelize,DataTypes)=>{
    const shopping_carts=sequelize.define('shopping_carts',{
        
        shopping_carts_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        customer_entity_id:{type:DataTypes.INTEGER},
        product_item_id:{type:DataTypes.INTEGER},
        unit_of_measurement_id:{type:DataTypes.INTEGER},
        items_images_id:{type:DataTypes.INTEGER},
        
        items:{type:DataTypes.STRING},
        qty:{type:DataTypes.INTEGER},
        price:{type:DataTypes.INTEGER},
        coupons:{type:DataTypes.STRING},  
         
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'shopping_carts'} ,    
     
    );
    return shopping_carts
}