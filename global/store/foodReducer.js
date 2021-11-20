import * as ACTION_TYPES from './action_types'
import uuid from 'uuid/v4'

const initialState = {
    user: {
        username: "",
        address: []
    },
    show: false,
    activeOrder: 50,
    session: "",
    menu: [
        [
            {key:uuid(),name:"Classic",subtitle: "Beef Burger",
            img:require('../../assets/burger/b3.png'),price: 5.39,
            desc: "Angus beef patty in sesame bun, topped with cheddar cheese, tomatoes, lettuce, onions and garlic sauce."
            ,calories: 578,rating: 5,weight: 225},
            {key:uuid(),name:"Double Bacon",
            desc: "Angus beef patty in sesame bun, topped with cheddar cheese, tomatoes, lettuce, onions and garlic sauce.",
            subtitle: "Extra Bacon",
            img:require('../../assets/burger/b4.png'),price: 7.49,
            calories: 666,rating: 5,weight: 250},
            {key:uuid(),name:"Egg & Cheddar",
            desc: "Scrambled eggs in breakfast muffin, topped with cheddar cheese, tomatoes and cucumber.",
            subtitle: "Morning Treat",img:require('../../assets/burger/b45.png'),price: 6.19
            ,calories: 450,rating: 4.8,weight: 250},
            {key:uuid(),name:"Big Show",
            desc: "Triple angus beef patty in sesame bun,  topped with cheddar cheese, tomatoes, lettuce, onions and garlic sauce.",
            subtitle: "Extra Beef",img:require('../../assets/burger/b6.png'),price: 8.19,
            calories: 709,rating: 4.9,weight: 250},
            {key:uuid(),name:"Chicken Steak",
            desc: "Chicken in sesame bun,  topped with cheddar cheese, tomatoes, lettuce, cucumber and garlic sauce.",
            subtitle: "Crispy",img:require('../../assets/burger/b7.png'),price: 7.19,
            calories: 501,rating: 5,weight: 250},
            {key:uuid(),name:"Fish Fillet",
            desc: "Fish Fillet in sesame bun,  topped with cheddar cheese, tomatoes, lettuce, cucumber and garlic sauce.",
            subtitle: "Fresh",img:require('../../assets/burger/b8.png'),price: 6.99,
            calories: 510,rating: 4,weight: 250},
            {key:uuid(),name:"Pulled Pork",
            desc: "Pulled Pork in sesame bun,  topped with cheddar cheese, tomatoes, lettuce, onions and BBQ sauce.",
            subtitle: "BBQ Sauce",img:require('../../assets/burger/b9.png'),price: 8.19,
            calories: 620,rating: 4.3,weight: 250},
            {key:uuid(),name:"Extra Cheddar",
            desc: "Angus beef patty in sesame bun,  topped with extra cheddar cheese, tomatoes, lettuce, onions and garlic sauce.",
            subtitle: "Cheesy",img:require('../../assets/burger/b50.png'),price: 6.81,
            calories: 550,rating: 5,weight: 250}
        ],
        [
            {key:uuid(),subtitle:"",name: "French Fries",
            desc: "Crispy golden french fries with sauce of choice.",
            img:require('../../assets/sides/s1.png'),price: 3.39,
            calories: 420,rating: 5,weight: 200},
            {key:uuid(),subtitle:"",name: "Onion Rings",
            desc: "Onion rings with sauce of choice.",
            img:require('../../assets/sides/s2.png'),price: 3.19,
            calories: 405,rating: 5,weight: 200},
            {key:uuid(),subtitle:"",name: "Chicken Wings",
            desc: "Spicy chicken wings with sauce of choice.",img:require('../../assets/sides/s3.png'),price: 4.19,
            calories: 390,rating: 4.5,weight: 200},
            {key:uuid(),subtitle:"",name: "Nachos",
            desc: "Cheesy nachos with sauce of choice.",img:require('../../assets/sides/s4.png'),price: 3.32,
            calories: 510,rating: 4.7,weight: 200},
            {key:uuid(),subtitle:"",name: "Chicken Strippers",
            desc: "Crispy chicken strippers with sauce of choice.",img:require('../../assets/sides/s5.png'),price: 4.19,
            calories: 395,rating: 5,weight: 200},
            {key:uuid(),subtitle:"",name: "Chicken Nuggets",
            desc: "Crispy chicken nuggets with sauce of choice.",img:require('../../assets/sides/s6.png'),price: 3.79,
            calories: 400,rating: 4,weight: 200},
            {key:uuid(),subtitle:"",name: "Fish Fingers",
            desc: "Delicious fish fingers with sauce of choice.",img:require('../../assets/sides/s7.png'),price: 3.79,
            calories: 390,rating: 3.5,weight: 200},
            {key:uuid(),subtitle:"",name: "Mozzarella Sticks",
            desc: "Cheesy mozzarella sticks with sauce of choice.",img:require('../../assets/sides/s10.png'),price: 3.39,
            calories: 450,rating: 5,weight: 200}
        ],
        [
            {key:uuid(),name:"Cheese",subtitle: "",img:require('../../assets//pizza/p2.png'),
            desc: "Classic cheese pizza with a choice of sauce.",
            price: 10.19,
            calories: 967,rating: 5,weight: 600},
            {key:uuid(),name:"Pepperoni",
            desc: "Classic pepperoni pizza with a choice of sauce.",subtitle: "",img:require('../../assets//pizza/p8.png'),price: 10.39,
            calories: 1010,rating: 5,weight: 600},
            {key:uuid(),name:"Hawaiian",
            desc: "Hawaiian pizza with ham and pineapple with a choice of sauce.",subtitle: "",img:require('../../assets//pizza/p3.png'),price: 12.39,
            calories: 1015,rating: 4.5,weight: 600},
            {key:uuid(),name:"Sweet Beef",
            desc: "Sweet Beef pizza with beef, sweet chilli sauce corn and peppers with a choice of sauce.",subtitle: "",img:require('../../assets//pizza/p4.png'),price: 11.39,
            calories: 1030,rating: 4,weight: 600},
            {key:uuid(),name:"Spicy Chicken",
            desc: "Spicy chicken pizza with marinated chicken breasts, jalapenos, corn and peppers with a choice of sauce.",subtitle: "",img:require('../../assets//pizza/p7.png'),price: 12.49,
            calories: 1003,rating: 5,weight: 600},
            {key:uuid(),name:"Chorizo & Onions",subtitle: "",
            desc: "Chorizo & Onions pizza with a rich serving or chorizo, onions and veggies with a choice of sauce.",img:require('../../assets//pizza/p6.png'),price: 11.19,
            calories: 1113,rating: 5,weight: 600},
        ],
        [
            {key:uuid(),name:"Choc Milkshake",subtitle: "",img:require('../../assets/drinks/d1.png'),price: 3.99,
            calories: 310,rating: 5,weight: 300},
            {key:uuid(),name:"Vanilla Milkshake",subtitle: "",img:require('../../assets/drinks/d2.png'),price: 3.99,
            calories: 300,rating: 3.5,weight: 300},
            {key:uuid(),name:"Orange Juice",subtitle: "",img:require('../../assets/drinks/d3.png'),price: 2.19,
            calories: 80,rating: 5,weight: 300},
            {key:uuid(),name:"Lemonade",subtitle: "",img:require('../../assets/drinks/d4.png'),price: 2.19,
            calories: 90,rating: 4,weight: 320},
            {key:uuid(),name:"Espresso",subtitle: "",img:require('../../assets/drinks/d5.png'),price: 1.99,
            calories: 5,rating: 5,weight: 80},
            {key:uuid(),name:"Hot Chocolate",subtitle: "",img:require('../../assets/drinks/d10.png'),price: 2.49,
            calories: 220,rating: 4.5,weight: 220}
        ],
        [
            {key:uuid(),name:"Spring Salad",subtitle: "",img:require('../../assets/salads/s7.png'),price: 5.99,
            calories: 150,rating: 5,weight: 420},
            {key:uuid(),name:"Gorgonzola",subtitle: "",img:require('../../assets/salads/s8.png'),price: 6.99,
            calories: 391,rating: 4,weight: 380},
            {key:uuid(),name:"Power Bowl",subtitle: "",img:require('../../assets/salads/s3.png'),price: 6.29,
            calories: 399,rating: 5,weight: 400},
            {key:uuid(),name:"Chicken Salad",subtitle: "",img:require('../../assets/salads/s4.png'),price: 6.19,
            calories: 276,rating: 4.5,weight: 380},
            {key:uuid(),name:"Strawberry Salad",subtitle: "",img:require('../../assets/salads/s5.png'),price: 7.99,
            calories: 250,rating: 4.6,weight: 390},
            {key:uuid(),name:"Broccoli Salad",subtitle: "",img:require('../../assets/salads/s6.png'),price: 5.49,
            calories: 140,rating: 4,weight: 400},
            {key:uuid(),name:"Caesar Salad",subtitle: "",img:require('../../assets/salads/s12.png'),price: 7.99,
            calories: 320,rating: 5,weight: 350},
            {key:uuid(),name:"Beef & Mango",subtitle: "",img:require('../../assets/salads/s13.png'),price: 8.49,
            calories: 330,rating: 3,weight: 350}
        ],
        [
            {key:uuid(),name:"Choc Ice cream",subtitle: "",img:require('../../assets/desserts/de1.png'),price: 2.49,
            calories: 240,rating: 5,weight: 225},
            {key:uuid(),name:"Vanilla Ice cream",subtitle: "",img:require('../../assets/desserts/de2.png'),price: 2.49,
            calories: 230,rating: 5,weight: 225},
            {key:uuid(),name:"Brownies",subtitle: "",img:require('../../assets/desserts/de3.png'),price: 3.99,
            calories: 420,rating: 5,weight: 150},
            {key:uuid(),name:"Pancakes",subtitle: "",img:require('../../assets/desserts/de4.png'),price: 3.49,
            calories: 305,rating: 4,weight: 200},
            {key:uuid(),name:"Choc Cake",subtitle: "",img:require('../../assets/desserts/de5.png'),price: 3.99,
            calories: 520,rating: 5,weight: 200},
            {key:uuid(),name:"Tiramisu",subtitle: "",img:require('../../assets/desserts/de6.png'),price: 3.49,
            calories: 420,rating: 4,weight: 200},
            {key:uuid(),name:"Cheesecake",subtitle: "",img:require('../../assets/desserts/de7.png'),price: 4.99,
            calories: 432,rating: 5,weight: 190},
            {key:uuid(),name:"Cookies",subtitle: "",img:require('../../assets/desserts/de8.png'),price: 2.49,
            calories: 498,rating: 5,weight: 150}
        ]
    ],
    cart: []
}

const foodReducer = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.ORDER:
            return state
        case ACTION_TYPES.SET_SHOW:
            return {...state,
                show: action.payload
            }
        case ACTION_TYPES.LOGOUT:
            return {...state,
            user:""
        }
        case ACTION_TYPES.LOGIN:
            return {...state,
            user:action.payload
        }
        case ACTION_TYPES.OPEN_OPTION:
            let cart = state.cart
            cart.map(i=>i.name === action.payload ? i.touched = !i.touched : null)
            return {...state,
            cart: cart}
        case ACTION_TYPES.REMOVE_ITEM:
            let cartFilter = state.cart
            cartFilter = cartFilter.filter(i=> i.name !== action.payload)
            return {...state,
            cart: cartFilter }
        case ACTION_TYPES.TRACK_ORDER:
            return {...state,
                activeOrder:action.payload
            }
        case ACTION_TYPES.ADD_ITEM:

            let list = state.cart
            let newItem = {
                touched: false,
                qty:action.payload.numberItems,
                price:action.payload.item.price,
                name: action.payload.item.name,
                img: action.payload.item.img
            }

            let filtered = list.filter(item=>item.name === action.payload.item.name )
            if(filtered.length > 0){
                list.map(item=>item.name === action.payload.item.name ? item.qty+= action.payload.numberItems : null)
                return {...state,
                    cart: list
                }
            }else{
                return {...state,
                    cart: [...state.cart,newItem]
                }
            }
        case ACTION_TYPES.CLEAR_CART:
            return {...state,
            cart:[]
        }
        case ACTION_TYPES.SESSION:
            return {...state,
            session: action.payload
        }
        case ACTION_TYPES.CHANGE_NUMBER:
            let increaseCart = state.cart
            increaseCart.map(item=> item.name === action.payload.name ? item.qty += 1 : null)
            return {...state,
            cart: increaseCart
        }
        case ACTION_TYPES.REDUCE_NUMBER:
            let decreaseCart = state.cart
            decreaseCart.map(item=> item.name === action.payload.name ? item.qty -= 1 : null)
            return {...state,
            cart: decreaseCart
        }
        default:
            return state
    }
}

export default foodReducer