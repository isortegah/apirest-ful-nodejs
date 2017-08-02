/**
* Created by ISORTEGAH on 01/08/2017
*/
'use strict'

const tokenService = require('./Token/index.js');
module.exports = {
    postToken : tokenService.postToken,
    postTokenOauth : tokenService.postTokenOauth
}