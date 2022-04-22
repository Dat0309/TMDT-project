import mongoose from "mongoose";

const discountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    discount_percent:{
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Discount = mongoose.model("Discount", discountSchema);

export default Discount;
