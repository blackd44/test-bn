import { Router } from "express";
import ItemsTypeController from "../controllers/itemTypes";

const itemTypeRoutes = Router();

itemTypeRoutes.get("/", ItemsTypeController.getAll);
itemTypeRoutes.post("/", ItemsTypeController.addItem);

itemTypeRoutes.get("/:id", ItemsTypeController.getOne);
itemTypeRoutes.patch("/:id", ItemsTypeController.updateItem);
itemTypeRoutes.delete("/:ids", ItemsTypeController.deleteItem);

export default itemTypeRoutes;
