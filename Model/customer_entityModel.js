module.exports=(sequelize,DataTypes)=>{
    const customer_entity=sequelize.define('customer_entity',{
        
        customer_entity_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        first_name:{type:DataTypes.STRING},
        last_name:{type:DataTypes.STRING},
        gender:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        mobile:{type:DataTypes.INTEGER},
        alternative_no:{type:DataTypes.STRING},
        profile_photo:{type:DataTypes.STRING},
        isVerify:{type:DataTypes.BOOLEAN},
        isActive:{type:DataTypes.BOOLEAN},
                    
    },  

    {tableName:'customer_entity'} ,    
     
    );
    return customer_entity
}