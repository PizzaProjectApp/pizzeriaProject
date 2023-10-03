import { errorFactory } from "./errorHandler";

//~> | MongoDB Errors
export const ConnectToMongoDBError = errorFactory({
    name: "ConnectToMongoDBError",
});

//~> |Pizza Controller
export const InvalidArgValuesError = errorFactory({
    name: "InvalidArgValuesError",
});

export const DuplicatedProductError = errorFactory({
    name: "DuplicatedProductError",
});

export const GetPizzasPaginatedError = errorFactory({
    name: "GetPizzasPaginatedError",
});
