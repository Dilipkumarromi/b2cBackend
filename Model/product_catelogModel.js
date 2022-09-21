module.exports=(sequelize,DataTypes)=>{
    const product_catelog=sequelize.define('product_catelog',{
        
        product_catelog_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        sub_category_id:{type:DataTypes.INTEGER},
        customer_entity_id:{type:DataTypes.INTEGER},
        product_catelog_type:{type:DataTypes.INTEGER},
        isActive:{type:DataTypes.BOOLEAN},
                    
    },  

    {tableName:'product_catelog'} ,    
     
    );
    return product_catelog
}