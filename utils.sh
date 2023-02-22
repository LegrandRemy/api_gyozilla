npx sequelize-cli model:generate --name Roles --attributes type:string
npx sequelize-cli model:generate --name Contract_types --attributes type:string
npx sequelize-cli model:generate --name Ratings --attributes step_visual:string,step_quality:string,step_taste:string
npx sequelize-cli model:generate --name Sales_Revenues --attributes ca:string
npx sequelize-cli model:generate --name Categories --attributes name:string
npx sequelize-cli model:generate --name Stocks_types --attributes type:string
npx sequelize-cli model:generate --name Suppliers --attributes contact_name:string,adress:string,phone:string,email:string,compagny:string
npx sequelize-cli model:generate --name Meetings --attributes end_hour:string,start_hour:string
npx sequelize-cli model:generate --name Hourly_types --attributes name:string
npx sequelize-cli model:generate --name Steps --attributes step:string
npx sequelize-cli model:generate --name Measurement_Units --attributes unity:string,id_stock:integer

npx sequelize-cli model:generate --name Stock --attributes label:string,price:string,reference:string, quantity:integer,id_stock_types:integer

npx sequelize-cli model:generate --name Stocks_Suppliers --attributes id_stock:integer,id_suppliers:integer
npx sequelize-cli model:generate --name Product_Stocks_Receipts --attributes id_products:integer,id_stock:integer
npx sequelize-cli model:generate --name Product_Categories --attributes id_products:integer,id_categories:integer
npx sequelize-cli model:generate --name Products --attributes label:string,price:string,reference:string,id_receipts:integer
npx sequelize-cli model:generate --name Products_Orders --attributes id_products:integer,id_orders:integer
npx sequelize-cli model:generate --name Orders --attributes status:string,payement_at:string,price:string,id_steps:integer,id_sales_revenues:integer,id_users:integer
npx sequelize-cli model:generate --name Users --attributes lastname:string,firstname:string,email:string,phone:string,adress:string,zipcode:string,city:string,hiring_date:date,salary:string,fidelitypoints:string,id_contract_types:integer,id_roles:integer
