module.exports=(sequelize,DataTypes)=>{
    const product_item_price=sequelize.define('product_item_price',{
        
        product_item_price_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        product_item_id:{type:DataTypes.INTEGER},
        product_category_tier_id:{type:DataTypes.INTEGER},
        
        price:{type:DataTypes.INTEGER},       
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'product_item_price'} ,    
     
    );
    return product_item_price
}