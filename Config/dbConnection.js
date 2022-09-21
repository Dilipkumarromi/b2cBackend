const {Sequelize,DataTypes}=require('sequelize');
require('dotenv').config()
 
const user=process.env.USER
const password=process.env.PASSWORD
const database=process.env.DATABASE
 
const localHost=process.env.HOST

const sequelize=new Sequelize(database,user,password,{
    host: localHost,
    dialect: 'mysql',  
    dialectOptions: {
        // Observe the need for this nested `options` field for MSSQL
        // options: {
        //   // Your tedious options here
        //   useUTC: false,
        //   dateFirst: 1,
        //   encrypt: false
          
        // }
        
      }
      
});
    sequelize.authenticate().then(() => {
        console.log("Connect Sequelize to mySQL Server");
       
    })
    .catch(err => {
        console.log("Error",err)
    })

  const db={}
  db.Sequelize = Sequelize
  db.sequelize=sequelize

  db.admin_user=require('../Model/admin_userModel')(sequelize,DataTypes)
  db.authorization_role=require('../Model/authorization_roleModel')(sequelize,DataTypes)
  db.categories=require('../Model/categoryModel')(sequelize,DataTypes)
  db.courier_tracking=require('../Model/courier_trackingModel')(sequelize,DataTypes)
  db.customer_activity=require('../Model/customer_activityModel')(sequelize,DataTypes)
  db.customer_addressModel=require('../Model/customer_addressModel')(sequelize,DataTypes)
  db.customer_entity=require('../Model/customer_entityModel')(sequelize,DataTypes)
  db.Gift_cards=require('../Model/Gift_cardsModel')(sequelize,DataTypes)
  db.items_images=require('../Model/items_imagesModel')(sequelize,DataTypes)
  db.micro_variants=require('../Model/micro_variantsModel')(sequelize,DataTypes)
  db.order_billings=require('../Model/order_billingsModel')(sequelize,DataTypes)
  db.order_shipment_address=require('../Model/order_shipment_addressModel')(sequelize,DataTypes)
  db.pincode_dairy=require('../Model/pincode_dairyModel')(sequelize,DataTypes)
  db.product_category_tier=require('../Model/product_category_tierModel')(sequelize,DataTypes)
  db.product_catelog=require('../Model/product_catelogModel')(sequelize,DataTypes)
  db.product_filter=require('../Model/product_filterModel')(sequelize,DataTypes)
  db.product_item_price=require('../Model/product_item_priceModel')(sequelize,DataTypes)
  db.product_item=require('../Model/product_itemModel')(sequelize,DataTypes)
  db.seller_profile=require('../Model/seller_profileModel')(sequelize,DataTypes)
  db.seller_details=require('../Model/seller_detailsModel')(sequelize,DataTypes)
  db.seller_order=require('../Model/seller_orderModel')(sequelize,DataTypes)
  db.shopping_carts=require('../Model/shopping_cartsModel')(sequelize,DataTypes)
  db.sub_category=require('../Model/sub_categoryModel')(sequelize,DataTypes)
  db.sub_variants=require('../Model/sub_variantsModel')(sequelize,DataTypes)
  db.unit_of_measurement=require('../Model/unit_of_measurementModel')(sequelize,DataTypes)
  db.werehouse_details=require('../Model/werehouse_detailsModel')(sequelize,DataTypes)
  db.wishlists=require('../Model/wishlistsModel')(sequelize,DataTypes)























     
  db.sequelize.sync()
  .then(() => {
      console.log("MyDB Re-sync")
      
  })
module.exports=db