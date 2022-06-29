class ExpressError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class BadRequestError extends ExpressError {
    constructor(msg) {
        super(msg || "Bad request", 400);
    }
}
class NotFoundError extends ExpressError {
    constructor(msg) {
        super(msg || "Not found", 404);
    }
}

module.exports = {
    ExpressError,
    BadRequestError,
    NotFoundError
}