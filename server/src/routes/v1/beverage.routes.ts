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

        //~> |Update an beverage by name
        this.put("/:bvgname", beverageController.updateBeverage);

        //~> |Delete an beverage by name
        this.delete("/:bvgname", beverageController.deleteBeverages);
    }
}
