import { RequestHandler } from "express";
import { Paginators } from "../helpers/model";
import { Categories } from "../models";

export default class ItemsCategoriesController {
  // get item categories
  static getAll: RequestHandler = async (req, res) => {
    // #swagger.tags = ['item categories']

    // #swagger.parameters['$ref'] = ['#/components/parameters/start', '#/components/parameters/size', '#/components/parameters/sort_by']
    const { skip, sorts, limit } = Paginators(req);

    const allCount = await Categories.countDocuments({});
    const all = await Categories.find()
      .sort(sorts)
      .skip(skip)
      .limit(limit)
      .populate({ path: "type" })
      .exec();

    res.status(200).json({
      results: {
        data: all,
        total: allCount,
        size: limit,
        start: skip,
        end: skip + limit,
      },
    });
  };

  // posting new item categories
  static addItem: RequestHandler = async (req, res) => {
    // #swagger.tags = ['item categories']
    /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/itemCategory"
          }
        }           
      }
    } */

    const { name, price, features, type } = req.body;

    const newItemType = await Categories.create({
      name,
      features,
      default_price: price,
      type,
    });

    res.json({
      result: newItemType,
      message: "item type added successfully",
    });
  };
}
