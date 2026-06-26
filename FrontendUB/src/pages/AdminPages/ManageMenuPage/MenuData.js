export const menuData = [
    {
        productId: '1',
        category: 'burger',
        image: '/images/products/QuarterPounderBeef.png',
        name: 'Quarter Pounder Beef',
        price: 75,
        rating: { stars: 5, count: 1000 },
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_02', name: 'Extra Patty', price: 30 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '',
        updatedAt: ''
    },
    { 
        productId: '2', 
        category: 'burger', 
        image: '/images/products/QuarterPounderBeef.png', 
        name: 'Quarter Pounder Chicken', 
        price: 75, // Changed from pricePeso
        rating: { stars: 5, count: 900 },  
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_02', name: 'Extra Patty', price: 30 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    { 
        productId: '3', 
        category: 'burger', 
        image: '/images/products/QuarterPounder2Patty.jpg', 
        name: 'Quarter Pounder Double Patty', 
        price: 119, // Changed from pricePeso
        rating: { stars: 5, count: 1985 }, 
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_02', name: 'Extra Patty', price: 30 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    { 
        productId: '4', 
        category: 'burger', 
        image: '/images/products/QuarterPounderShawarma.jpg', 
        name: 'Quarter Pounder Shawarma', 
        price: 70, // Changed from pricePeso
        rating: { stars: 5, count: 687 }, 
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_02', name: 'Extra Patty', price: 30 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    { 
        productId: '5', 
        category: 'burger', 
        image: '/images/products/QuarterPounderBBQ.jpg', 
        name: 'Quarter Pounder BBQ',
        price: 85,  // Changed from pricePeso
        rating: { stars: 5, count: 1518 }, 
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_02', name: 'Extra Patty', price: 30 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    { 
        productId: '6', 
        category: 'burger', 
        image: '/images/products/QuarterPounder-w-Fries.jpg', 
        name: 'Quarter Pounder Beef w/ Fries',
        price: 109,  // Changed from pricePeso
        rating: { stars: 5, count: 1518 },
        friesFlavor:[
            { id: 'fries1', name: 'Classic', price: 0},
            { id: 'fries2', name: 'Cheese', price: 5}, // Fixed duplicate IDs
            { id: 'fries3', name: 'Sour Cream', price: 5},
            { id: 'fries4', name: 'BBQ', price: 5},
        ],
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_02', name: 'Extra Patty', price: 30 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    {
        productId: '7', 
        category: 'sides', 
        image: '/images/products/Nachos-Overload.png', 
        name: 'Nachos Overload', 
        price: 75, // Changed from pricePeso
        rating: { stars: 5, count: 541 }, 
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    {
        productId: '8', 
        category: 'sides', 
        image: '/images/products/burgers.jpg', 
        name: 'Nacho-Yo-Fries', 
        price: 109, // Changed from pricePeso
        rating: { stars: 5, count: 871 }, 
        addOns: [
            { id: 'add_01', name: 'Extra Sauce', sauces: [{id:'sauce1', name: 'Cheese'}, {id:'sauce2', name: 'Garlic Mayo'}], price: 10 },
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    {
        productId: '9', 
        category: 'sides', 
        image: '/images/products/Shawarma.png', 
        name: 'Shawarma (Pita)', 
        price: 70, // Changed from pricePeso
        rating: { stars: 5, count: 651 }, 
        addOns: [
            { id: 'add_03', name: 'Take-out Box', price: 5 }
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    {
        productId: '10', 
        category: 'sides', 
        image: '/images/products/Fries.png', 
        name: 'Fries',
        price: 35, // Added base price so the UI doesn't crash when it reads product.price!
        size:[
            {id:'size1', name: 'small (100g)', price:35},
            {id:'size2', name: 'large (200g)', price:65}, // Fixed duplicate IDs
            {id:'size3', name: 'Overload (200g, with meat, cheese and mayo)', price:135}
        ],
        rating: { stars: 5, count: 871 },
        friesFlavor:[
            { id: 'fries1', name: 'Classic', price: 0},
            { id: 'fries2', name: 'Cheese', price: 5}, // Fixed duplicate IDs
            { id: 'fries3', name: 'Sour Cream', price: 5},
            { id: 'fries4', name: 'BBQ', price: 5},
        ], 
        addOns: [
            { id: 'add_03', name: 'Take-out Box', price: 5 } // Changed id to match others
        ],
        drinks: [
            { id: 'drk_01', name: 'Coke Mismo', price: 25 },
            { id: 'drk_02', name: 'Mineral Water', price: 20 },
            { id: 'drk_03', name: 'Large Coke', price: 90 }
        ],
        createdAt: '', 
        updatedAt: '' 
    },
    {
        productId: '11',
        category : 'pizza',
        image : '/images/products/all-vegie-pizza.jpg',
        name: 'All Veggies Pizza',
        price: 160,
        rating: { stars: 5, count: 2015 },
        size : [
            { id: 'size1', name: '10 inches', price: 160},
            { id: 'size2', name: '12 inches', price: 180}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '12',
        category : 'pizza',
        image : '/images/products/cheesy-cheese-pizza.png',
        name: 'Cheesy Cheese Pizza',
        price: 170,
        rating: { stars: 5, count: 970 },
        size : [
            { id: 'size1', name: '10 inches', price: 170},
            { id: 'size2', name: '12 inches', price: 200}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '13',
        category : 'pizza',
        image : '/images/products/peperoni-mushroom-pizza.jpg',
        name: 'Pepperoni Mushroom Pizza',
        price: 170,
        rating: { stars: 5, count: 651 },
        size : [
            { id: 'size1', name: '10 inches', price: 170},
            { id: 'size2', name: '12 inches', price: 220}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '14',
        category : 'pizza',
        image : '/images/products/shawarma-pizza.jpg',
        name: 'Shawarma Pizza',
        price: 170,
        rating: { stars: 5, count: 771 },
        size : [
            { id: 'size1', name: '10 inches', price: 170},
            { id: 'size2', name: '12 inches', price: 220}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '15',
        category : 'pizza',
        image : '/images/products/hungarian-sausage-pizza.jpg',
        name: 'Hungarian Sausage Pizza',
        price: 170,
        rating: { stars: 5, count: 716 },
        size : [
            { id: 'size1', name: '10 inches', price: 170},
            { id: 'size2', name: '12 inches', price: 220}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '16',
        category : 'pizza',
        image : '/images/products/hawaiian-pizza.jpg',
        name: 'Hawaiian Pizza',
        price: 160,
        rating: { stars: 5, count: 526 },
        size : [
            { id: 'size1', name: '10 inches', price: 160},
            { id: 'size2', name: '12 inches', price: 190}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '17',
        category : 'pizza',
        image : '/images/products/all-meat.jpg',
        name: 'All Meat Pizza',
        price: 190,
        rating: { stars: 5, count: 641},
        size : [
            { id: 'size1', name: '10 inches', price: 190},
            { id: 'size2', name: '12 inches', price: 230}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '18',
        category : 'pizza',
        image : '/images/products/all-meat-overload-pizza.png',
        name: 'All Meat Overload Pizza',
        price: 250,
        rating: { stars: 5, count: 478 },
        size : [
            { id: 'size1', name: '10 inches', price: 250},
            { id: 'size2', name: '12 inches', price: 320}
        ],
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '19',
        category : 'pizzaBurger',
        image : '/images/products/Pepperoni-Mushroom-burge-pizza.png',
        name: 'Hawaiian Pizza Burger',
        price: 289,
        rating: { stars: 5, count: 916 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '20',
        category : 'pizzaBurger',
        image : '/images/products/Pepperoni-Mushroom-burge-pizza.png',
        name: 'Pepperoni Mushroom Pizza Burger',
        price: 329,
        rating: { stars: 5, count: 1058 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '21',
        category : 'pizzaBurger',
        image : '/images/products/Pepperoni-Mushroom-burge-pizza.png',
        name: 'Hungarian Suasage Pizza Burger',
        price: 319,
        rating: { stars: 5, count: 840 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '22',
        category : 'pizzaBurger',
        image : '/images/products/Mozzarella-burger-pizza.png',
        name: 'Mozzarella Pizza Burger',
        price: 299,
        rating: { stars: 5, count: 826 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '23',
        category : 'pizzaBurger',
        image : '/images/products/Mozzarella-burger-pizza.png',
        name: 'Cheesy Cheese Pizza Burger',
        price: 299,
        rating: { stars: 5, count: 832 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '24',
        category : 'pizzaBurger',
        image : '/images/products/Mozzarella-burger-pizza.png',
        name: 'Shawarma Pizza Burger',
        price: 299,
        rating: { stars: 5, count: 715 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '25',
        category : 'pizzaBurger2in1',
        image : '/images/products/Pepperoni-Cheesy-Cheese-burger-pizza.png',
        name: 'Hawaiian / Mozzarella Pizza Burger',
        price: 299,
        rating: { stars: 5, count: 801 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '26',
        category : 'pizzaBurger2in1',
        image : '/images/products/Pepperoni-Cheesy-Cheese-burger-pizza.png',
        name: 'Pepperoni / Hawaiian Pizza Burger',
        price: 349,
        rating: { stars: 5, count: 687 },
        createdAt: '', 
        updatedAt: ''
    },
    {
        productId: '27',
        category : 'pizzaBurger2in1',
        image : '/images/products/Pepperoni-Cheesy-Cheese-burger-pizza.png',
        name: 'Cheesy Cheese / Pepperoni Pizza Burger',
        price: 329,
        rating: { stars: 5, count: 480 },
        createdAt: '', 
        updatedAt: ''
    },
];