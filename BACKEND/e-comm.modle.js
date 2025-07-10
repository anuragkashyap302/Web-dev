// pure e-cmoorce me hume products , user , orders, cart, etc. ki zarurat hoti hai sabka model bna sakte hai


import mongoose from "mongoose";
// User model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, lowercase: true }, // unique and lowercase for consistency
    password: { type: String, required: [true, 'Password is required'] },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true }
}, {
    timestamps: true // ye humare model me createdAt and updatedAt field add karega
});
export const User = mongoose.model('User', userSchema);
// category model
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // unique to prevent duplicate categories
}, {
    timestamps: true // ye humare model me createdAt and updatedAt field add karega
});
export const Category = mongoose.model('Category', categorySchema);
// 
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    // wo kis category se hai product iski jankri product model se milegi
    category: { type: mongoose.Schema.Types.ObjectId,  ref: "Category", required: true }, // reference to Category model
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // reference to User model
    stock: { type: Number, required: true,default: 0 }, // default stock is 0
    imageUrl: { type: String, required: true }
}, {
    timestamps: true // ye humare model me createdAt and updatedAt field add karega
});
export const Product = mongoose.model('Product', productSchema);
// order model
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // reference to User model
    // sabse important cheez order me hoti hai ki wo kis product ka hai aur kitna quantity hai usko ek array me leke model bahaye
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // reference to Product model
        quantity: { type: Number, required: true, default: 1 } // default quantity is 1
    }],
     address:{
       type: String,
       required: true // address is required for order
     },
    totalAmount: { type: Number, required: true },
    // staus type to string but koi use glalt bhi type kar sakta to enum ka use kar lo ki isi me se koi opetion choose kar sakte hai
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' } // default status is Pending
}, {
    timestamps: true // ye humare model me createdAt and updatedAt field add karega
});
export const Order = mongoose.model('Order', orderSchema);

