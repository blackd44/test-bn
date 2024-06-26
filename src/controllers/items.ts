import { RequestHandler } from "express";
import { Items } from "../models";
import { Paginators } from "../helpers/model";

export default class ItemsController {
  // getting all items
  static getAll: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items']

    // #swagger.parameters['$ref'] = ['#/components/parameters/start', '#/components/parameters/size', '#/components/parameters/sort_by']
    const { skip, sorts, limit } = Paginators(req);

    const itemCount = await Items.countDocuments({});
    const items = await Items.find().sort(sorts).skip(skip).limit(limit).exec();

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
