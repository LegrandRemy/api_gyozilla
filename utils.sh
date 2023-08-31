# npx sequelize-cli model:generate --name Roles --attributes type:string
# npx sequelize-cli model:generate --name Ratings --attributes step_visual:string,step_quality:string,step_taste:string
# npx sequelize-cli model:generate --name Categories --attributes name:string
# npx sequelize-cli model:generate --name Stocks_types --attributes type:string
# npx sequelize-cli model:generate --name Suppliers --attributes contact_name:string,address:string,phone:string,email:string,compagny:string
# npx sequelize-cli model:generate --name Meetings --attributes end_hour:string,start_hour:string
# npx sequelize-cli model:generate --name Steps --attributes step:string
# npx sequelize-cli model:generate --name Measurement_Units --attributes unity:string,id_stock:integer

# npx sequelize-cli model:generate --name Stock --attributes label:string,price:string,reference:string, quantity:integer,id_stock_types:integer

# npx sequelize-cli model:generate --name Stocks_Suppliers --attributes id_stock:integer,id_suppliers:integer
# npx sequelize-cli model:generate --name Product_Stocks_Receipts --attributes id_products:integer,id_stock:integer
# npx sequelize-cli model:generate --name Product_Categories --attributes id_products:integer,id_categories:integer
# npx sequelize-cli model:generate --name Products --attributes label:string,price:string,reference:string,id_receipts:integer
# npx sequelize-cli model:generate --name Products_Orders --attributes id_products:integer,id_orders:integer
# npx sequelize-cli model:generate --name Orders --attributes status:string,payement_at:string,price:string,id_steps:integer,id_users:integer

# npx sequelize-cli model:generate --name Users --attributes lastname:string,firstname:string,email:string,phone:string,address:string,zipcode:string,city:string,hiring_date:date,salary:string,fidelityPoints:string,id_contract_types:integer,id_roles:integer


# npx sequelize-cli model:generate --name Roles --attributes name:string
# npx sequelize-cli model:generate --name Customers --attributes email:string,password:string,fidelityPoints:string
# npx sequelize-cli model:generate --name Ratings --attributes id_customers:integer,id_products:integer,note:integer
# npx sequelize-cli model:generate --name Stocks --attributes id_franchises:integer,id_ingredients:integer,quantity:integer
# npx sequelize-cli model:generate --name Suppliers --attributes name:string,address:string,phone:string
# npx sequelize-cli model:generate --name Orders --attributes id_customers:integer,id_franchises:integer,date_order:date,total_price:integer,id_status:string
# npx sequelize-cli model:generate --name OrderLines --attributes id_orders:integer,id_products:integer,quantity:integer
npx sequelize-cli model:generate --name Ingredients --attributes name:string,purchasePrice:float
npx sequelize-cli model:generate --name Products --attributes name:string,description:text,photo:string,price:float,creation_steps:text,id_product_categories:integer
# npx sequelize-cli model:generate --name ProductCategories --attributes name:string
# npx sequelize-cli model:generate --name Status --attributes name:string
# npx sequelize-cli model:generate --name SupplierOrders --attributes date_order:date,total_price:integer,id_suppliers:integer,id_franchises:integer
# npx sequelize-cli model:generate --name Deliveries --attributes id_suppliers_orders:integer,delivery_date:date,carrier_name:string
# npx sequelize-cli model:generate --name Franchises --attributes name:string,address:string,phone:string
# npx sequelize-cli model:generate --name Employees --attributes phone:string,email:string,password:string,id_roles:integer,id_franchises:integer
# npx sequelize-cli model:generate --name Permissions --attributes type:string