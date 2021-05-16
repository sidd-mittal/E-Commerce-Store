# Product + User REST-API
# Description + Inspiration
As a developer interested in learning more about backend development, I decided to design and develop my own REST API. The purpose of this API is to perform CRUD operations 
on product data as well as users. 

# Main Features
- Create, update, read, and delete products 
- Securely implemented login/signup functionality by encrypting passwords during storage
- Secured all API paths using JWT 
- Utilized joi to validate schemas during POST/PUT requests
- Added ability for product pagination 
- Followed MVC architecture to decouple code into controllers, services, models, and routes to allow for scalability 

# Tools 
- Node.js & Express.js (Server)
- MongoDB (Database) 
- Mongoose (ORM) 
- NPM Packages: @hapi/joi (Schema Validation), bcrypt (Password Encryption), JWT, CORS 

# Backend API Endpoints

| Endpoint      | Type      | Description  |
| ------------- |-----------| ------|
| /user/signup   | POST | - Add new user to the repository|
| /user/login      | POST  | - Login user to use website + return JWT token |
| /product | POST  | - Add new product to the repository |
| /product | GET  | - Retrieve all products from repository |
| /product/:id | GET  | - Retrieve a specific product from repository VIA id |
| /product/:id | PUT  | - Update product attributes from repository VIA id |
| /product/:id | DELETE  | - Delete product from repository VIA id |

