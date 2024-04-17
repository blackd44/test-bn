import { Router } from "express";
import ItemController from "../controllers/items";

const itemRoutes = Router();

itemRoutes.get("/", ItemController.getAll);
itemRoutes.post("/", ItemController.addItem);

export default itemRoutes;
