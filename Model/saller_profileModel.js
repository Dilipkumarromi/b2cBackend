module.exports=(sequelize,DataTypes)=>{
    const saller_profile=sequelize.define('saller_profile',{
        
        saller_profile_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},       
        customer_address_id:{type:DataTypes.INTEGER},
        first_name:{type:DataTypes.STRING},
        last_name :{type:DataTypes.STRING},
        longitude:{type:DataTypes.STRING},
        latitude:{type:DataTypes.STRING},
        km:{type:DataTypes.INTEGER},
        
        contact_no:{type:DataTypes.INTEGER},
        saller_code:{type:DataTypes.STRING},
          
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'saller_profile'} ,    
     
    );
    return saller_profile
}