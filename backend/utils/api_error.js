

class api_error extends Error{
    constructor(status, message, error = [],stack="") {
        super(message);
        // this.data = data;
        this.status = status;
        this.message = message;
        this.success = false;
        this.error = error;
        this.stack = stack;

        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }

}

export {api_error};