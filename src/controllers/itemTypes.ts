import { RequestHandler } from "express";
import { Paginators } from "../helpers/model";
import { Types } from "../models";

export default class ItemsTypeController {
  // get item type
  static getAll: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items types']

    // #swagger.parameters['$ref'] = ['#/components/parameters/start', '#/components/parameters/size', '#/components/parameters/sort_by']
    const { skip, sorts, limit } = Paginators(req);

    const allCount = await Types.countDocuments({});
    const all = await Types.find().sort(sorts).skip(skip).limit(limit).exec();

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

  // posting new item type
  static addItem: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items types']

    const { name, description } = req.body;

    const newItemType = await Types.create({
      name,
      description,
    });

    res.json({
      result: newItemType,
      message: "item type added successfully",
    });
  };
}
