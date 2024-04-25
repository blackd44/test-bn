import { Schema, model } from "mongoose";

const CategoriesSchema = new Schema(
  {
    name: String,
    features: {
      type: [String],
      default: [],
    },
    default_price: {
      amount: Number,
      currency: String,
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "types",
    },
  },
  { timestamps: true }
);

// CategoriesSchema.virtual("example").get(() => "hello");

const Categories = model("categories", CategoriesSchema);

export default Categories;
