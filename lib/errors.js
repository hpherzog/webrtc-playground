

export class BaseError {
    constructor () {
        Error.apply(this, arguments);
    }
}

BaseError.prototype = new Error();

export class BrowserNotSupported extends BaseError {

    constructor(browser) {
        super();
        this.message = 'Browser ' + browser + ' is not supported';
        this.browser = browser;
    }
}
