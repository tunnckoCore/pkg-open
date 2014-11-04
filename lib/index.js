/**
 * pkg-open <https://github.com/tunnckoCore/pkg-open>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var npm = require('npm');
var opn = require('opn');

npm.load({}, function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  npm.commands.view([process.argv[2], 'repository.url'], function(err, rurl) {
    if (err) {
      console.error(err);
      process.exit(1);
      return;
    }

    var url = require('url');
    var obj = url.parse(rurl[Object.keys(rurl)[0]]['repository.url']);

    if (obj.protocol !== 'https:') {
      obj.protocol = 'https:';
    }
    opn(url.format(obj));
  });
});
