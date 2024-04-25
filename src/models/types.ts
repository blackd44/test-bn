import { Schema, model } from "mongoose";

const TypesSchema = new Schema(
  {
    name: String,
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Types = model("types", TypesSchema);

export default Types;
