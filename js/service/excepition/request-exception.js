// https://rolbar.com/guides/javascript/how-to-throw-exceptions-in-javascript

export default function RequestException(message){
    error = new Error(message);
    return error;
}

RequestException.prototype = Object.create(Error.prototype);
