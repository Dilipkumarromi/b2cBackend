module.exports=(sequelize,DataTypes)=>{
    const wishlists=sequelize.define('wishlists',{
        
        wishlists_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        
        customer_entity_id:{type:DataTypes.INTEGER},
        sales_order_id:{type:DataTypes.STRING},
        items:{type:DataTypes.INTEGER},
        qty:{type:DataTypes.INTEGER},
        price:{type:DataTypes.INTEGER},
         
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'wishlists'} ,    
     
    );
    return wishlists
}