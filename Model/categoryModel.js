module.exports=(sequelize,DataTypes)=>{
    const product_categories=sequelize.define('category',{
        
        product_categories_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        category_name:{type:DataTypes.STRING},
        category_image:{type:DataTypes.STRING},    
        
        isActive:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'category'} ,    
     
    );
    return product_categories
}