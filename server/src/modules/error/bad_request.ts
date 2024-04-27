import BaseResponse from "./base_response";

class BadRequest extends BaseResponse {
    constructor(message: string) {
        super(message, 400)
        Object.setPrototypeOf(this, BadRequest.prototype)
    }
}
export default BadRequest;