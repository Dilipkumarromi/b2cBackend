module.exports=(sequelize,DataTypes)=>{
    const werehouse_details=sequelize.define('werehouse_details',{
        
        werehouse_details_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},       
         
        werehouse_name:{type:DataTypes.STRING},
        street:{type:DataTypes.STRING},
        city:{type:DataTypes.STRING},
        distric:{type:DataTypes.STRING},
        state:{type:DataTypes.STRING},
        zip:{type:DataTypes.STRING},
        contact_no:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
  
          
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'werehouse_details'} ,    
     
    );
    return werehouse_details
}