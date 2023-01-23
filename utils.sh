npx sequelize-cli model:generate --name Roles --attributes id:integer,type:string

npx sequelize-cli model:generate --name Contract_types --attributes id:integer,type:string

npx sequelize-cli model:generate --name Ratings --attributes id:integer,step_visual:string,step_quality:string,step_taste:string

npx sequelize-cli model:generate --name Sales_Revenues --attributes id:integer,ca:string

npx sequelize-cli model:generate --name Categories --attributes id:integer,name:string

npx sequelize-cli model:generate --name Receipts --attributes id:integer,wording:string,reference:integer,id_step:integer

npx sequelize-cli model:generate --name Ressources_types --attributes id:integer,type:string

npx sequelize-cli model:generate --name Alerts --attributes id:integer,alert:string

npx sequelize-cli model:generate --name Meetings --attributes id:integer,end_hour:string,start_hour:string

npx sequelize-cli model:generate --name Hourly_types --attributes id:integer,name:string

npx sequelize-cli model:generate --name Steps --attributes id:integer,step:string

npx sequelize-cli model:generate --name Measurement_Units --attributes id:integer,unity:string,id_ressources:integer

npx sequelize-cli model:generate --name Ressources --attributes id:integer,working:string,price:string,reference:string,id_alerts:integer,id_ressources_types:integer

npx sequelize-cli model:generate --name Ressources_Suppliers --attributes id:integer,id_ressources:integer,id_suppliers:integer

npx sequelize-cli model:generate --name Product_Ressources --attributes id:integer,id_products:integer,id_ressources:integer

npx sequelize-cli model:generate --name Product_Categories --attributes id:integer,id_products:integer,id_categories:integer

npx sequelize-cli model:generate --name Products --attributes id:integer,working,string,price:string,reference:string,id_receipts

npx sequelize-cli model:generate --name Products_Orders --attributes id:integer,id_products:integer,id_orders:integer

npx sequelize-cli model:generate --name Orders --attributes id:integer,status:string,payement_at:string,price:string,id_steps:integer,id_sales_revenues:integer,id_users:integer

npx sequelize-cli model:generate --name Users --attributes id:integer,lastname:string,firstname:string,email:string,phone:string,adress:string,zipcode:string,city:string,hiring_date:date,salary:string,fidelitypointegers:string,id_contract_types:integer,id_roles:integer

npx sequelize-cli model:generate --name Step --attributes id:integer,step:string

npx sequelize-cli model:generate --name Hourlies --attributes id:integer,_start:string,_end:string

npx sequelize-cli model:generate --name Users_Hourlies --attributes id:integer,id_users:integer,id_hourlies:integer

npx sequelize-cli model:generate --name Users_Ratings --attributes id:integer,id_users:integer,id_ratings:integer

npx sequelize-cli model:generate --name Users_meetings --attributes id:integer,id_users:integer,id_meetings:integer
