class api_response {
    constructor(status, message = "success", data) {
        this.data = data;
        this.status = status;
        this.message = message;
        this.success = true;
    }
}
export {api_response};