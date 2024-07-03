# ID: 11137631
# rn-assignment6-11137631
# Open Fashion App

Open Fashion is a simple React Native shopping app that allows users to browse products, add them to a cart, and view the cart for checkout. This README provides an overview of the design choices, data storage implementation, and includes screenshots of the app.

## Design Choices

1. **User Interface**:
   - The user interface is designed to be clean and intuitive, with easy navigation between the Home screen and the Cart screen.
   - The `HomeScreen` displays a list of products in a grid layout, each with an image, title, subtitle, price, and an "Add to Cart" button.
   - The `CartScreen` shows the items added to the cart, with an option to remove items and view the estimated total.

2. **Navigation**:
   - React Navigation is used for navigating between the Home screen and the Cart screen.
   - Icons from `@expo/vector-icons` are used for the menu, search, and cart buttons for a consistent look and feel.

3. **Styling**:
   - The app uses `StyleSheet` for styling components, ensuring a clean and maintainable codebase.
   - Consistent margins, paddings, and font sizes are applied to provide a visually appealing layout.

## Data Storage

Data storage is implemented using `@react-native-async-storage/async-storage`. This allows the app to persist the cart data even when the app is closed or restarted.

### Implementation

1. **Loading Cart Data**:
   - When the `HomeScreen` and `CartScreen` components mount, they load the cart data from AsyncStorage using the `loadCart` function.
   - The `loadCart` function retrieves the cart data from AsyncStorage and updates the `cart` state.

2. **Adding to Cart**:
   - When a product is added to the cart from the `HomeScreen`, the `addToCart` function updates the `cart` state and saves the updated cart to AsyncStorage.

3. **Removing from Cart**:
   - The `removeFromCart` function in the `CartScreen` removes an item from the cart, updates the `cart` state, and saves the updated cart to AsyncStorage.

## Screenshots

### Home Screen
![alt text](<WhatsApp Image 2024-07-03 at 01.04.22_72be58b8.jpg>)

![alt text](<WhatsApp Image 2024-07-03 at 01.04.12_62e0cfed.jpg>)

### Cart Screen
![alt text](<WhatsApp Image 2024-07-03 at 01.03.52_761366f4.jpg>)

![alt text](<WhatsApp Image 2024-07-03 at 01.03.41_77cf6a85.jpg>)


