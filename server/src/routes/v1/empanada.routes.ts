import EmpanadaController from "../../controllers/empanada.controller";
import CustomRouter from "../../middlewares/custom-router.middleware";

//~~> | Empanada Controller
const empanadaController = new EmpanadaController();

export default class EmpanadaRouter extends CustomRouter {
    init() {
        //~> |Get a list of available empanadas
        this.get("/", empanadaController.getEmpanadas);

        //~> |Add a new empanada
        this.post("/", empanadaController.addEmpanada);

        //~> |Get an empanada by ID
        this.get("/:empid", empanadaController.getEmpanadaById);

        //~> |Update an empanada by ID
        this.put("/:empid", empanadaController.updateEmpanada);

        //~> |Partially Update an empanada by ID
        this.patch("/:empid", empanadaController.partialUpdateEmpanadaById);

        //~> |Delete an empanada by ID
        this.delete("/:empid", empanadaController.deleteEmpanadaById);
    }
}
