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

        //~> |Update an beverage by id
        this.put("/:bvgid", beverageController.updateBeverageById);

        //~> |Partial Update an beverage by id
        this.patch("/:bvgid", beverageController.partialUpdateBeverageById);

        //~> |Delete an beverage by id
        this.delete("/:bvgid", beverageController.deleteBeverages);
    }
}
