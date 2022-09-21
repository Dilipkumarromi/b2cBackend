module.exports=(sequelize,DataTypes)=>{
    const admin_user=sequelize.define('admin_user',{
        
        admin_user_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        customer_entity_id:{type:DataTypes.INTEGER},
  
        first_name:{type:DataTypes.STRING},
        last_name:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        mobile:{type:DataTypes.STRING},
        username:{type:DataTypes.STRING},
        salt_key:{type:DataTypes.STRING},
        password:{type:DataTypes.STRING},       
         
        isVerify:{type:DataTypes.BOOLEAN},
        isActive :{type:DataTypes.BOOLEAN},             
    },  

    {tableName:'admin_user'} ,    
     
    );
    return admin_user
}