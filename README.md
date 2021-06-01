# myMarketplace



SET UP

1. Download Nodejs
2. Download mongoDB client and compass(GUI)
   1. code editor
   2. web browser
   3. vs code extension
3. website template

   1. create marketplace folder
   2. create tmeplate folder
   3. create index.html
   4. add default html code
   5. link to style.css
   6. create header, main and footer
   7. style elements

4. display products

   1. create products div
   2. add product attributes
   3. add link, image, name and prices

5. Create React App

   1. npx create-react-app frontend
   2. npm start
   3. remove unused files
   4. copy index.html contents to App.js
   5. copy style.css contents to index.css
   6. replace class with className

6. Change the static page to dynamic

   1. create a data.js file
   2. define the products object as an array
   3. remove cart duplications from app.js
   4. transform the static cart into dynamic linked with data.js

7. Create Rating and Product Component

   1. create components/Products.js
   2. transfer mapped product from App.js into Product.js rfc,
      i.e extract products from Product.js and log it(modular)
   3. create components/Rating.js
   4. transfer the ratings in App.js/Product.js to Rating.js
   5. format div.rating
   6. style div.rating, span and last span
   7. Use Rating component

8. Build product screen

   1. install react-router-dom
   2. use BrowserRouter and Route for Home Screen
   3. defined Route in the main content
   4. create HomeScreen.js
   5. add product list code there
   6. create ProductScreen.js
   7. add new Route from product details to App.js
   8. create 3 columns for product image, info and action

9. Create Node.JS backend Server

   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

10. Load Products from Backend
    a. add proxy to package.json
    b. edit HomeScreen.js
    c. define products, loading and errors
    d. create useEffect
    e. define async fetchData and call it
    f. install axios
    g. get data from api/products
    h. show them in the list
    i. create loading components
    j. create message box components
    k. use them in HomeScreen

11. Install ESlint for Code Linting
    a. install VSCode eslint extension
    b. npm install -D eslint
    c. run ./node_modules/.bin/eslint --init
    d. create ./frontend/.env
    e. add SKIP_PREFLIGHT_CHECK = true
