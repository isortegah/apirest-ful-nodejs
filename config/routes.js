/**
* Created by ISORTEGAH on 27/07/2017
*/
'use strict'
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = ( app ) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    return app;
}