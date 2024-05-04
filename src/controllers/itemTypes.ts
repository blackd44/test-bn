import { RequestHandler } from "express";
import { Paginators } from "../helpers/model";
import { Types } from "../models";

export default class ItemsTypeController {
  // get items type
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
        end: skip - 1 + all.length,
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

  // get items type
  static getOne: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items types']

    const { id } = req.params;

    const one = await Types.findById(id).exec();

    res.status(200).json({
      results: { data: one },
    });
  };

  // posting new item type
  static updateItem: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items types']

    const { id } = req.params;
    const { name, description } = req.body;

    const ItemType = await Types.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    ).exec();

    res.json({
      result: ItemType,
      message: "item type update successfully",
    });
  };

  // posting new item type
  static deleteItem: RequestHandler = async (req, res) => {
    // #swagger.tags = ['items types']

    const { ids } = req.params;
    const deletedIds = `${ids}`?.split?.(",");

    const ItemType = await Types.deleteMany({ _id: deletedIds });

    res.json({
      result: ItemType,
      message: "item type update successfully",
    });
  };
}
