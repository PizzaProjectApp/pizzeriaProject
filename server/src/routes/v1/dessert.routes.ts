import DessertController from "../../controllers/dessert.controller";
import CustomRouter from "../../middlewares/CustomRouter";

//~~> | Dessert Controller
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
        this.put("/:dstid", dessertController.updateDessert);

        //~> |Partially Update an dessert by id
        this.patch("/:dstid", dessertController.partialUpdateDessertById);

        //~> |Delete an dessert by name
        this.delete("/:dstid", dessertController.deleteDesserts);
    }
}
