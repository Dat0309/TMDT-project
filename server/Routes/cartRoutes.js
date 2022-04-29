import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import Cart from "../Models/CartModel.js";

const cartRouter = express.Router();

// CREATE CART
cartRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const cart = new Cart({
        orderItems,
      });

      const createCart = await cart.save();
      res.status(201).json(createCart);
    }
  })
);

// GET CART BY ID
cartRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id);

    if (cart) {
      res.json(cart);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

export default cartRouter;
