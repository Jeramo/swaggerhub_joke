'use strict';


/**
 * searches joke
 * By passing in the appropriate options, you can search for available joke in the system 
 *
 * searchString String pass an optional search string for looking up jokes (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchAllJoke = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "YIKES!",
  "language" : "english",
  "id" : 12345,
  "type" : "dogs",
  "joke" : "How did the little Scottish dog feel when he saw a monster? Terrier-fied!",
  "client_defined" : { }
}, {
  "name" : "YIKES!",
  "language" : "english",
  "id" : 12345,
  "type" : "dogs",
  "joke" : "How did the little Scottish dog feel when he saw a monster? Terrier-fied!",
  "client_defined" : { }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

