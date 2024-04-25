import { Router } from "express";
import ItemsTypeController from "../controllers/itemTypes";

const itemTypeRoutes = Router();

itemTypeRoutes.get("/", ItemsTypeController.getAll);
itemTypeRoutes.post("/", ItemsTypeController.addItem);

export default itemTypeRoutes;
