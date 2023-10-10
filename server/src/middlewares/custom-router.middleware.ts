import { Request, Response, NextFunction, Router } from "express";
// import Jwt from "jsonwebtoken";

type CustomCallback = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void>;

// Create a Router Class
export default class CustomRouter {
    private router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }
    getRouter() {
        return this.router;
    }

    init(): void {}

    get(path: string, ...callbacks: CustomCallback[]): void {
        this.router.get(
            //Remember add "policies" to callback up
            path,
            // this.handlePolicies(policies),
            // this.generateCustomResponses,
            this.applyCallbacks(callbacks)
        );
    }
    post(path: string, ...callbacks: CustomCallback[]): void {
        //Remember add "policies" to callback up
        this.router.post(
            path,
            // this.handlePolicies(policies),
            // this.generateCustomResponses,
            this.applyCallbacks(callbacks)
        );
    }
    put(path: string, ...callbacks: CustomCallback[]): void {
        //Remember add "policies" to callback up
        this.router.put(
            path,
            // this.handlePolicies(policies),
            // this.generateCustomResponses,
            this.applyCallbacks(callbacks)
        );
    }
    patch(path: string, ...callbacks: CustomCallback[]): void {
        //Remember add "policies" to callback up
        this.router.patch(
            path,
            // this.handlePolicies(policies),
            // this.generateCustomResponses,
            this.applyCallbacks(callbacks)
        );
    }
    delete(path: string, ...callbacks: CustomCallback[]): void {
        //Remember add "policies" to callback up
        this.router.delete(
            path,
            // this.handlePolicies(policies),
            // this.generateCustomResponses,
            this.applyCallbacks(callbacks)
        );
    }

    applyCallbacks(callbacks: CustomCallback[]): CustomCallback[] {
        return callbacks.map((callback) => async (...params) => {
            try {
                await callback.apply(this, params);
            } catch (error) {
                console.error(error);
                params[1].status(500).send(error);
            }
        });
    }

    // generateCustomResponses = (
    //     _req: Request,
    //     res: Response,
    //     next: NextFunction
    // ): void => {
    //     res.sendSuccess = (payload: any) =>
    //         res.send({ status: "Success", payload });
    //     res.sendServerError = (error: any) =>
    //         res.status(500).send({ status: "error", error });
    //     next();
    // };

    // handlePolicies = (policies) => (req, res, next) => {
    //     if (policies === "PUBLIC") return next();
    //     const authHeaders = req.headers.authorization;

    //     if (!authHeaders)
    //         return res
    //             .status(401)
    //             .send({ status: "error", error: "Unauthorized" });

    //     const token = authHeaders;

    //     let user = Jwt.verify(token, "MagicianToken");

    //     if (!policies.includes(user.role.toUpperCase()))
    //         return res
    //             .status(401)
    //             .send({ status: "error", message: " Unauthorized" });
    //     req.user = user;
    //     next();
    // };
}
