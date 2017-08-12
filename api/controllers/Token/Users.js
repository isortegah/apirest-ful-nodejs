/**
* Created by ISORTEGAH on 01/08/2017
*/
'use strict'
const _ = require('lodash') ,
    jwtDecode = require('jwt-decode');;

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

    isUserEmailValid( user , idToken ) {
        let decoded = jwtDecode(idToken);
        if(decoded.email != user)
            return false

        return true;
    }

    isNotExpiredDate( idToken ){
        try{
            let decoded = jwtDecode(idToken);
            if ( Math.round(new Date().getTime()/1000) > decoded.exp ) return false;
        }catch( e ){
            return true;
        }
    }

}
