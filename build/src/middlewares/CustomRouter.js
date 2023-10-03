"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CustomRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.init();
    }
    getRouter() {
        return this.router;
    }
    init() { }
    get(path, ...callbacks) {
        this.router.get(path, this.applyCallbacks(callbacks));
    }
    post(path, ...callbacks) {
        this.router.post(path, this.applyCallbacks(callbacks));
    }
    put(path, ...callbacks) {
        this.router.put(path, this.applyCallbacks(callbacks));
    }
    delete(path, ...callbacks) {
        this.router.delete(path, this.applyCallbacks(callbacks));
    }
    applyCallbacks(callbacks) {
        return callbacks.map((callback) => async (...params) => {
            try {
                await callback.apply(this, params);
            }
            catch (error) {
                console.error(error);
                params[1].status(500).send(error);
            }
        });
    }
}
exports.default = CustomRouter;
