module.exports=(sequelize,DataTypes)=>{
    const Gift_cards=sequelize.define('Gift_cards',{
        
        Gift_cards_id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},        
          
        Initial_value:{type:DataTypes.INTEGER},
        Remaining_amount:{type:DataTypes.INTEGER},
        Coupon_code:{type:DataTypes.STRING},
        
        gift_card_expiry:{type:DataTypes.STRING},   
        
        isActivated:{type:DataTypes.BOOLEAN}
             
    },  

    {tableName:'Gift_cards'} ,    
     
    );
    return Gift_cards
}