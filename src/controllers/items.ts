import { RequestHandler } from "express";
import { Items } from "../models";
import { sortFields } from "../helpers/model";

export default class ItemsController {
  // getting all items
  static getAll: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items']

    const { start, size, sort_by } = req.query;

    const skip = Number(start) || 0;
    const limit = Number(size) || 10;
    const sorts = sortFields(`${sort_by || ""}`);

    const itemCount = await Items.countDocuments({});
    const items = await Items.find().sort(sorts).skip(skip).limit(limit);

    res.status(200).json({
      results: {
        data: items,
        total: itemCount,
        size: limit,
        start: skip,
        end: skip + limit,
      },
    });
  };

  // posting item
  static addItem: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items']

    const { title, description, amount, currency } = req.body;

    const newItem = await Items.create({
      title,
      description,
      price: { amount, currency },
    });
    res.json({
      result: newItem,
      message: "item added successfully",
    });
  };
}
