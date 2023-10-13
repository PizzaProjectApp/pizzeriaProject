import { Router } from "express";
import BeverageRouter from "./beverage.routes";
import DessertRouter from "./dessert.routes";
import EmpanadaRouter from "./empanada.routes";
import PizzaRouter from "./pizza.routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        //~> | V1 routes
        router.use("/api/v1/pizzas", PizzaRouter.routes);
        router.use("/api/v1/empanadas", EmpanadaRouter.routes);
        router.use("/api/v1/desserts", DessertRouter.routes);
        router.use("/api/v1/beverages", BeverageRouter.routes);

        return router;
    }
}
