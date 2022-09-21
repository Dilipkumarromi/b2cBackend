module.exports=(sequelize,DataTypes)=>{
    const customer_activity =sequelize.define('customer_activity',{        
        customer_activity_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        customer_entity_id:{type:DataTypes.INTEGER},  
        product_item_id:{type:DataTypes.INTEGER},

        customer_interest_log:{type:DataTypes.STRING},
        IP_address:{type:DataTypes.STRING},
        customer_type:{type:DataTypes.STRING},    
        isPurchase:{type:DataTypes.BOOLEAN}, 
        isActive :{type:DataTypes.BOOLEAN},    
            
    },  

    {tableName:'customer_activity'} ,    
     
    );
    return customer_activity
}