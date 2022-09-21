module.exports=(sequelize,DataTypes)=>{
    const pincode_dairy=sequelize.define('pincode_dairy',{
        
        pincode_dairy_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        saller_details_id:{type:DataTypes.INTEGER},
        state:{type:DataTypes.STRING},
        distric:{type:DataTypes.STRING},
        city:{type:DataTypes.STRING},
        Post_Office_Name:{type:DataTypes.STRING},
        street:{type:DataTypes.STRING},
        pincode:{type:DataTypes.INTEGER},
  
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'pincode_dairy'} ,    
     
    );
    return pincode_dairy
}