

import {BrowserNotSupported} from '../../errors';
import _ from 'lodash';
import * as platform from 'platform';
import * as chrome from './chrome';

var browsers = {
    'chrome': {
        lib: chrome,
        cfg: {}
    }
}

export function setBrowserConfig(browser, config) {

    if(_.has(browsers, browser.toLowerCase())) {
        browsers[browser.toLowerCase()].cfg = config;
    } else {
        throw new BrowserNotSupported(browser);
    }
}

export function createStream(options) {

    return new Promise(function(resolve, reject) {

        if(!_.isString(platform.name)) {
            throw new Error('Failed to detect platform');
        }

        let browser = platform.name.toLowerCase();
        if(_.has(browsers, browser)) {

            let createOptions = _.extend({}, options, browsers[browser].cfg);
            browsers[browser].lib.createStream(createOptions).then(function(stream) {
                resolve(stream);
            }).catch(function(err){
                reject(err);
            });
        } else {
            throw new BrowserNotSupported(browser);
        }
    });
}
