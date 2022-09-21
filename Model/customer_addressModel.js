module.exports=(sequelize,DataTypes)=>{
    const customer_address=sequelize.define('customer_address',{
        
        customer_address_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        customer_entity_id:{type:DataTypes.INTEGER},
        street:{type:DataTypes.STRING},
        city:{type:DataTypes.STRING},
        distric:{type:DataTypes.STRING},
        state:{type:DataTypes.STRING},
        zip:{type:DataTypes.STRING},
        isVerify:{type:DataTypes.BOOLEAN},
        isActive :{type:DataTypes.BOOLEAN},
             
        
    }, 

    {tableName:'customer_address'} ,    
     
    );
    return customer_address
}