import BeverageController from "../../controllers/beverage.controller";
import CustomRouter from "../../middlewares/CustomRouter";

//~~> | Empanada Controller
const beverageController = new BeverageController();

export default class BeverageRouter extends CustomRouter {
    init() {
        //~> |Get a list of available beverages
        this.get("/", beverageController.getBeverages);

        //~> |Add a new beverage
        this.post("/", beverageController.addBeverage);

        //~> |Get an beverage by ID
        this.get("/:bvgid", beverageController.getBeverageById);

        //~> |Update an beverage by ID
        this.put("/:bvgid", beverageController.updateBeverageById);

        //~> |Partially Update an beverage by ID
        this.patch("/:bvgid", beverageController.partialUpdateBeverageById);

        //~> |Delete an beverage by ID
        this.delete("/:bvgid", beverageController.deleteBeverageById);
    }
}
