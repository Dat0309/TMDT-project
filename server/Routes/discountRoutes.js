import express from "express";
import asyncHandler from "express-async-handler";
import Discount from "../Models/DiscountModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const discountRoute = express.Router();

// GET ALL DDISCOUNT
discountRoute.get(
    "/",
    asyncHandler(async (req, res) => {
      const pageSize = 12;
      const page = Number(req.query.pageNumber) || 1;
      const keyword = req.query.keyword
        ? {
            name: {
              $regex: req.query.keyword,
              $options: "i",
            },
          }
        : {};
      const count = await Discount.countDocuments({ ...keyword });
      const discounts = await Discount.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1 });
      res.json({ discounts, page, pages: Math.ceil(count / pageSize) });
    })
  );


  // ADMIN GET ALL DISCOUNT WITHOUT SEARCH AND PEGINATION
discountRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const discount = await Discount.find({}).sort({ _id: -1 });
      res.json(discount);
    })
  );
  
  // GET SINGLE DISCOUNT
  discountRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const discount = await Discount.findById(req.params.id);
      if (discount) {
        res.json(discount);
      } else {
        res.status(404);
        throw new Error("Discount not Found");
      }
    })
  );
  
  // DELETE DISCOUNT
  discountRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const discount = await Discount.findById(req.params.id);
      if (discount) {
        await discount.remove();
        res.json({ message: "Discount deleted" });
      } else {
        res.status(404);
        throw new Error("Discount not Found");
      }
    })
  );
  
  // CREATE DISCOUNT
  discountRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const { name, description, discount_percent } = req.body;
      const discountExist = await Discount.findOne({ name });
      if (discountExist) {
        res.status(400);
        throw new Error("Discount name already exist");
      } else {
        const discount = new Discount({
          name,
          description,
          discount_percent,
          user: req.user._id,
        });
        if (discount) {
          const createddiscount = await discount.save();
          res.status(201).json(createddiscount);
        } else {
          res.status(400);
          throw new Error("Invalid discount data");
        }
      }
    })
  );
  
  // UPDATE DISCOUNT
  discountRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const { name, description, discount_percent } = req.body;
      const discount = await Discount.findById(req.params.id);
      if (discount) {
        discount.name = name || discount.name;
        discount.description = description || discount.description;
        discount.discount_percent = discount_percent || discount.discount_percent;
  
        const updatedDiscount = await discount.save();
        res.json(updatedDiscount);
      } else {
        res.status(404);
        throw new Error("Discount not found");
      }
    })
  );

  export default discountRoute;
