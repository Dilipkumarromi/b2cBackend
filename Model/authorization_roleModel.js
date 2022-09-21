module.exports=(sequelize,DataTypes)=>{
    const authorization_role=sequelize.define('authorization_role',{
        
        authorization_role_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        customer_entity_id:{type:DataTypes.INTEGER},  
        admin_user_id:{type:DataTypes.INTEGER}, 
        role_name:{type:DataTypes.STRING},
        role_type:{type:DataTypes.STRING},
        role_id:{type:DataTypes.INTEGER},    
         
        isVerify:{type:DataTypes.BOOLEAN},
        isActive :{type:DataTypes.BOOLEAN},             
    },  

    {tableName:'authorization_role'} ,    
     
    );
    return authorization_role
}