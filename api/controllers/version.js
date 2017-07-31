/**
* Created by ISORTEGAH on 30/07/2017
*/
'use strict'
const versionService = require('./version/index.js');

module.exports = {
    version : versionService.getVersion
}