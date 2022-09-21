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
        options: {
          // Your tedious options here
          useUTC: false,
          dateFirst: 1,
          encrypt: false
          
        }
        
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

  db.customer_entity=require('../Model/customer_entityModel')(sequelize,DataTypes)
  db.customer_addressModel=require('../Model/customer_addressModel')(sequelize,DataTypes)
  db.admin_user=require('../Model/admin_userModel')(sequelize,DataTypes)
  db.authorization_role=require('../Model/authorization_roleModel')(sequelize,DataTypes)
  db.customer_activity=require('../Model/customer_activityModel')(sequelize,DataTypes)
  db.categories=require('../Model/categoryModel')(sequelize,DataTypes)


     
  db.sequelize.sync()
  .then(() => {
      console.log("MyDB:- Re-sync")
      
  })
module.exports=db