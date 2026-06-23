// 1. WHAT THE DATABASE STORES (The raw cart data)
// Endpoint: GET /api/cart-items
export const userCartData = [
    { cartId: 1, productId: 1, quantity: 5, totalPrice: 725 },
    { cartId: 2, productId: 10, quantity: 2, totalPrice: 140 },
    { cartId: 3, productId: 6, quantity: 3, totalPrice: 507 },
];

// 2. WHAT THE FRONTEND RECEIVES FOR UI (The expanded data)
// Endpoint: GET /api/cart-items?expand=products
export const userCartDataExpanded = [
    {
        cartId: 1,
        productId: 1,
        quantity: 5,
        totalPrice: 725,
        
        // SENIOR FIX: User selections belong to the Cart, not the Product!
        selections: {
            selectedSize: null,
            selectedFlavor: null,
            selectedAddOns: [
                { id: 'add_01', name: 'Extra Sauce', selectedSauces: [{ id: 'sauce1', name: 'Cheese' }], price: 10 },
                { id: 'add_02', name: 'Extra Patty', price: 30 },
                { id: 'add_03', name: 'Take-out Box', price: 5 }
            ],
            selectedDrinks: [
                { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            ]
        },

        // The master product data (Never changes, just tells the UI what picture to load)
        product: {
            productId: 1,
            category: 'burger',
            image: '/images/products/QuarterPounderBeef.png',
            name: 'Quarter Pounder Beef',
            basePrice: 75,
        }
    },
    {
        cartId: 2,
        productId: 10,
        quantity: 2,
        totalPrice: 140,
        selections: {
            selectedSize: { id: "size2", name: "large (200g)", price: 65.00 },
            selectedFlavor: { id: "fries2", name: "Cheese", price: 5.00 },
            selectedAddOns: [],
            selectedDrinks: [],
        },
        product: {
            productId: 10, // Fixed the productId here (was 1 in your example)
            category: 'sides',
            image: '/images/products/Fries.png',
            name: 'Fries',
            basePrice: 0,
        }
    },
    {
        cartId: 3,
        productId: 6,
        quantity: 3,
        totalPrice: 507,
        selections: {
            selectedSize: null,
            selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5},
            selectedAddOns: [
                { id: 'add_02', name: 'Extra Patty', price: 30 },
                { id: 'add_03', name: 'Take-out Box', price: 5 }
            ],
            selectedDrinks: [
                { id: 'drk_02', name: 'Mineral Water', price: 20 }
            ],
        },
        product: {
            productId: 6,
            category: 'burger',
            image: '/images/products/QuarterPounder-w-Fries.jpg',
            name: 'Quarter Pounder Beef w/ Fries',
            basePrice: 109,
        }
    },
];

// 3. THE ORDER PAYLOAD (What we send to the backend when they click "Place Order")
// We will use this when we build the checkout function!
export const checkoutPayloadExample = {
    cartItems: [1, 2, 3], // The IDs of the cart items above
    serviceMode: 'take-out',
    paymentMethod: 'gcash',
    grandTotal: 1372 // 725 + 140 + 507
};