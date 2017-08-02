/**
* Created by ISORTEGAH on 01/08/2017
*/
'use strict'
const _ = require('lodash');

module.exports = class {

    isUserValid( user ) {
        console.log(_.findIndex(this.getRegisteredUsers(),user));
        
        if(_.findIndex(this.getRegisteredUsers(),user) > -1 )
            return true;
        else
            return false;
    }

    getRegisteredUsers(){
        let users = [
            { 'user' : 'test'     , 'password' : 'Test123456'}
        ]
        return users;
    }

}
