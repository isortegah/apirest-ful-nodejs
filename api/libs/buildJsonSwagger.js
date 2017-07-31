/**
* Created by ISORTEGAH on 29/07/2017
*/
'use strict'
module.exports = ( environment ) => {
    var yaml = require('js-yaml'),
            fs   = require('fs');
        var yamlw = require('write-yaml');
        var port = process.env.PORT || 3000;
        try {
            var doc = yaml.safeLoad(fs.readFileSync('api/swagger/swagger.yaml', 'utf8'));
            switch(environment){
                case 'LOCAL' :
                    doc['host'] = 'localhost:'+ port;
                break;
                case 'DEV' :
                    var host = process.env.URLSWAGGER || '192.168.99.100'
                    doc['host'] = host + ":" + port;
                break;
                case 'PROD' :
                    doc['host'] = process.env.URLSWAGGER || 'demoapinode.isortegah.com'
                break;
            }
            yamlw.sync('api/swagger/swagger.yaml', doc);
            fs.writeFileSync('config/swagger.json', JSON.stringify(doc, null, 2));
        } catch (e) {
            console.log(e);
        }
} 