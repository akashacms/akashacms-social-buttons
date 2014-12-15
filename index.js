/**
 *
 * Copyright 2013 David Herron
 * 
 * This file is part of AkashaCMS-booknav (http://akashacms.com/).
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var path     = require('path');
var util     = require('util');

/**
 * Add ourselves to the config data.
 **/
module.exports.config = function(akasha, config) {
    config.root_partials.push(path.join(__dirname, 'partials'));
    
    config.funcs.sharethisButtons = function(arg, callback) {
        var val = akasha.partialSync("sharethis.html.ejs", arg);
        if (callback) callback(undefined, val);
        return val;
    }
    // https://developers.google.com/+/web/+1button/
    config.funcs.googlePlusSimpleButton = function(arg, callback) {
        var val = akasha.partialSync("gplus-simple.html.ejs", arg);
        if (callback) callback(undefined, val);
        return val;
    }
    // https://twitter.com/about/resources/buttons#tweet
    config.funcs.twitterShareButton = function(arg, callback) {
        var val = akasha.partialSync("tweetPage.html.ejs", arg);
        if (callback) callback(undefined, val);
        return val;
    }
    // https://twitter.com/about/resources/buttons#follow
    config.funcs.twitterFollowButton = function(arg, callback) {
        var val = akasha.partialSync("twitter-follow.html.ejs", arg);
        if (callback) callback(undefined, val);
        return val;
    }
    // http://www.reddit.com/buttons/
    config.funcs.redditThisButton = function(arg, callback) {
        var val = akasha.partialSync("reddit-this.html.ejs", arg);
        if (callback) callback(undefined, val);
        return val;
    }
}


// TBD: function/partial google plus, facebook, buttons and like boxes
// TBD: google+ page boxes
// TBD: facebook page boxes
// TBD: Reddit button
// TBD: Digg button