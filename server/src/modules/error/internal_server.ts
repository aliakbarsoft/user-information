import BaseResponse from "./base_response";

class InternalServer extends BaseResponse {
    constructor(message: string) {
        super(message, 500);
        Object.setPrototypeOf(this, InternalServer.prototype);
    }
}

export default InternalServer