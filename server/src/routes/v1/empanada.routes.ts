import EmpanadaController from "../../controllers/empanada.controller";
import CustomRouter from "../../middlewares/CustomRouter";

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

        //~> |Update an empanada by name
        this.put("/:empname", empanadaController.updateEmpanadas);

        //~> |Delete an empanada by name
        this.delete("/:empname", empanadaController.deleteEmpanadas);
    }
}
