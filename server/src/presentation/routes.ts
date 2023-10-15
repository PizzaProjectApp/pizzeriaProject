import { Router } from "express";
// import BeverageRouter from "./products";
// import DessertRouter from "./products";
// import EmpanadaRouter from "./products";
import { PizzaRoutes } from "./products/v1";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        //~> | V1 ROUTES
        router.use("/api/v1/pizzas", PizzaRoutes.routes);
        // router.use("/api/v1/empanadas", EmpanadaRouter.routes);
        // router.use("/api/v1/desserts", DessertRouter.routes);
        // router.use("/api/v1/beverages", BeverageRouter.routes);

        return router;
    }
}
