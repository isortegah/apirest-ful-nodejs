/**
* Created by ISORTEGAH on 27/07/2017
*/
'use strict'

module.exports = ( grunt ) => {
    let environment = grunt.option('ENV') || 'LOCAL';
    grunt.registerTask( 'buildSwagger' , () => {
        require('./api/libs/buildJsonSwagger')( environment )
    });
}