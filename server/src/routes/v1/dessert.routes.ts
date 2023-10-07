import DessertController from "../../controllers/dessert.controller";
import CustomRouter from "../../middlewares/CustomRouter";

//~~> | Empanada Controller
const dessertController = new DessertController();

export default class DessertRouter extends CustomRouter {
    init() {
        //~> |Get a list of available desserts
        this.get("/", dessertController.getDesserts);

        //~> |Add a new dessert
        this.post("/", dessertController.addDessert);

        //~> |Get an dessert by ID
        this.get("/:dstid", dessertController.getDessertById);

        //~> |Update an dessert by name
        this.put("/:dstname", dessertController.updateDessert);

        //~> |Delete an dessert by name
        this.delete("/:dstname", dessertController.deleteDesserts);
    }
}
