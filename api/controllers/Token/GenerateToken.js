/**
* Created by ISORTEGAH on 01/08/2017
*/
'use strict'
const jwt           = require('jsonwebtoken') ,
    config          = require('../../../config/configJWT');

module.exports = class {

    getToken ( usr ){
        var payload = {
            user : usr,
            exp: this.getDateExp()
        }
        return jwt.sign(payload, config.secret);
    }

    getDateExp(){
        return Math.round(new Date().getTime()/1000)+10800;
    }
}