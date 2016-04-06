

import _ from 'lodash';
import {BaseError} from '../../../errors';


export class ChromeExtensionError extends BaseError {

    constructor(message) {
        super();
        this.message = message;
    }
}

/**
 * @param  {*} options
 * @param  {string} options.extensionId
 * @return {Promise}
 */
export function createStream(options) {

    var extensionTimeout = 3000;

    return new Promise(function(resolve, reject){

        options = options || {};

        chrome.runtime.sendMessage(options.extensionId, options, function(response){

            if(response.type === 'SUCCESS') {
                resolve(response.id);
            } else {
                reject(new ChromeExtensionError(response.message));
            }
        });

        setTimeout(function(){
            reject(new ChromeExtensionError('Could not connect to chrome extension'));
        }, extensionTimeout);
    });
};
