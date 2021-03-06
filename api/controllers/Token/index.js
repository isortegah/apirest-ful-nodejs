/**
* Created by ISORTEGAH on 01/08/2017
*/
'use strict'
const Users = require('./Users');
const GenerateToken = require('./GenerateToken');

module.exports = {
    
    postToken : ( req , res ) => {
        const user = new Users();
        if(user.isUserValid(req.body)){
            let token = new GenerateToken();
            res
                .status(201)
                .send({ 'token': token.getToken( req.body.user )})
                .end();
        }else
            res.status(401).send({'error': 'Usuario y/o Password incorrecto'});
    },

    postTokenOauth: ( req , res ) => {
        const user = new Users();
        
        if(user.isUserEmailValid( req.body.user , req.body.idToken )){
            if( !user.isNotExpiredDate(req.body.idToken) ){
                let token = new GenerateToken();
                res.status(201)
                .send({ 'token': token.getToken( req.body.user )})
                .end();
            }else
                res.status(401)
                .send({
                    error: "IdToken ha expirado"
                })
                .end();
        }else{
            res.status(401)
                .send({
                    error: "Usuario no autorizado"
                })
                .end();
        }
    }
}