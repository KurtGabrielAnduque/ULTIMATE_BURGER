// call the Orders data api
export const CustomerOrder = [{
    orderId: "ORD-00123", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Completed', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-23T11:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
},{
    orderId: "ORD-00124", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Completed', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-23T12:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
},{
    orderId: "ORD-00125", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Completed', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-24T15:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
},{
    orderId: "ORD-00126", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Completed', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-24T16:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
},{
    orderId: "ORD-00127", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Preparing', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-25T10:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
},{
    orderId: "ORD-00128", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Ready', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-25T11:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
},{
    orderId: "ORD-00129", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Pending', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-25T12:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
},{
    orderId: "ORD-00130", // String IDs are usually safer for orders
    customerId: "user_98765", 
    customerName: "Kurt Gabriel Anduque",
    contactNumber: "09687929730",
    orderStatus: 'Pending', // 'Pending' | 'Preparing' | 'Ready' | 'Completed'
    paymentStatus: 'Paid', // 'Paid' | 'Unpaid'
    paymentMethod: 'gcash',
    orderService: 'take-out',
    orderTotal: 1372,
    createdAt: '2026-06-25T13:01:13', // Standard ISO timestamp
    products: [
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
                selectedFlavor: { id: 'fries3', name: 'Sour Cream', price: 5 },
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
    ]
}
]