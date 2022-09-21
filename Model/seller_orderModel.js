module.exports=(sequelize,DataTypes)=>{
    const seller_order=sequelize.define('seller_order',{
        
        seller_order_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},       
        customer_entity_id:{type:DataTypes.INTEGER},
        product_item_id:{type:DataTypes.INTEGER},
        items_images_id:{type:DataTypes.INTEGER},
        Gift_cards_id:{type:DataTypes.INTEGER},
        
        wishlists_id:{type:DataTypes.INTEGER},
        isOrdereConfirm:{type:DataTypes.BOOLEAN},
        isPaymentDone:{type:DataTypes.BOOLEAN},
          
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'seller_order'} ,    
     
    );
    return seller_order
}