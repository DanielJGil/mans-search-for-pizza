# MAN'S SEARCH FOR PIZZA
LIVE DEMO URL: https://mans-search-for-pizza.vercel.app/

This is a small restaurant application where users are able to add items from the menu into their cart, order the items and then view existing orders.

Application features:
- The users are greeted with a homepage where they can input their name or search for an exisiting order.
  <img width="1470" alt="Screenshot 2023-11-14 at 14 49 06" src="https://github.com/DanielJGil/mans-search-for-pizza/assets/131858991/62cee3e4-2d32-4392-9ac9-bb0794910b76">
<img width="1470" alt="Screenshot 2023-11-14 at 14 49 13" src="https://github.com/DanielJGil/mans-search-for-pizza/assets/131858991/e8eb2d22-3633-4f04-9f26-ae4b1b0d4ae8">

- Once they enter their name, the user will be taken to the restaurant menu where they can see all available items and add them to their cart. They can select quantity and are able to view their cart overview at the bottom of the screen.
<img width="1470" alt="Screenshot 2023-11-14 at 14 49 40" src="https://github.com/DanielJGil/mans-search-for-pizza/assets/131858991/4255ca3c-5921-4d70-ba98-1e57699f64e0">
<img width="1470" alt="Screenshot 2023-11-14 at 14 49 49" src="https://github.com/DanielJGil/mans-search-for-pizza/assets/131858991/225f8975-784e-47bd-bd22-ee01b1b61434">

- The user can then view their cart and choose to add or remove items before continuing.
<img width="1470" alt="Screenshot 2023-11-14 at 14 49 56" src="https://github.com/DanielJGil/mans-search-for-pizza/assets/131858991/0f1c30c8-7359-46a4-97bc-2ccc09914efa">

- Once happy with their order, they can continue to the form where they must fill out their name, number and address. The user can click on get position to get their current location. There is also an option to choose priority order which will add 20% to their order. If the user does not choose it, there will be an option to change this later.
<img width="1470" alt="Screenshot 2023-11-14 at 14 50 03" src="https://github.com/DanielJGil/mans-search-for-pizza/assets/131858991/fa32e812-20b8-4cbc-9ae8-fd9a47db1792">

- Once the user orders the food, a new page will display with the information of the current order, including estimated delivery time. This order can also be searched for later using the ORDER ID.
<img width="1470" alt="Screenshot 2023-11-14 at 14 50 24" src="https://github.com/DanielJGil/mans-search-for-pizza/assets/131858991/139bdfc2-fea6-49dd-9dbf-b85e153ad2da">

I created this app using React and used an API which contains all the restaurant data and allows new orders to be created on the database.

My technology decisions:
Routing - React Router / Styling - Tailwind / Remote State Management - React Router / UI State Management - Redux
