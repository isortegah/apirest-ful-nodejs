/**
* Created by ISORTEGAH on 30/07/2017
*/
'use strict'
module.exports = {
    getVersion : ( req , res ) => {
        var version = "0.1.0";
        res.json({
            "version" : version
        });
    }
}