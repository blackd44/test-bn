import { Router } from "express";
import ItemsCategoriesController from "../controllers/itemCategories";

const itemCategoriesRoutes = Router();

itemCategoriesRoutes.get("/", ItemsCategoriesController.getAll);
itemCategoriesRoutes.post("/", ItemsCategoriesController.addItem);

export default itemCategoriesRoutes;
