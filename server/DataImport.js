import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import Product from "./Models/ProductModel.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler";
import discounts from "./data/discount.js";
import Discount from "./Models/DiscountModel.js";
import Categories from "./Models/CategoriesModel.js";
import categories from "./data/categories.js";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

ImportData.post(
  "/discount",
  asyncHandler(async (req, res) => {
    await Discount.deleteMany({});
    const importDiscount = await Discount.insertMany(discounts);
    res.send({ importDiscount });
  })
);

ImportData.post(
  "/categories",
  asyncHandler(async (req, res) => {
    await Categories.deleteMany({});
    const importCategories = await Categories.insertMany(categories);
    res.send({ importCategories });
  })
);

export default ImportData;
