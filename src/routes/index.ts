import { Router } from "express";
import itemRoutes from "./items";
import itemTypeRoutes from "./itemTypes";
import itemCategoriesRoutes from "./itemCategories";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello world !!" });
});

routes.delete("/error_test_api", (req, res, next) => {
  console.log(req.body);

  res.status(req.body.status || 400);
  next(new Error(req.body.message || "Error testing api"));
});

// importing routes
routes.use("/item/types", itemTypeRoutes);
routes.use("/item/categories", itemCategoriesRoutes);
routes.use("/items", itemRoutes);

export default routes;
