import { Schema, model } from "mongoose";

const ItemsSchema = new Schema(
  {
    title: String,
    description: String,
    price: {
      amount: Number,
      currency: String,
    },
  },
  { timestamps: true }
);

const Items = model("items", ItemsSchema);

export default Items;
