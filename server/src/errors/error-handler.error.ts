export interface HandleErrorOptions {
    name: string;
}

export const errorFactory = function (options: HandleErrorOptions) {
    return class HandleError extends Error {
        constructor(message: string) {
            super(message);
            this.name = options.name;
            this.stack = "";
        }
    };
};
