module.exports=(sequelize,DataTypes)=>{
    const sub_category=sequelize.define('sub_category',{
        
        sub_category_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        sub_category_name:{type:DataTypes.STRING},
        sub_category_image:{type:DataTypes.STRING},    
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'sub_category'} ,    
     
    );
    return sub_category
}