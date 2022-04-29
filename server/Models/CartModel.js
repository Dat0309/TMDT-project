import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
    {
        cartItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "Product",
                },
            },
        ],
    },
    {
        timestamps: true,
    },
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;