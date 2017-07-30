APIREST FUL NODEJS
===

## Descripción



# Índex
* [Pre requisitos](#pre-requisitos)
* [Swagger Node](#swagger-node)
* [Swagger UI](#swagger-ui)

## Pre requisitos

* Creación de proyecto
    * Inicializar proyecto -> `npm init`
    * Inicializar control de versiones -> `git init``

## Swagger Node

* Instalar `swagger-node`
```
npm install -g swagger
```

* Crear proyecto
```
swagger project create apirest-ful-nodejs
```
* Primera ejecución
```
swagger project start
```
ó
```
node app.js
```

**Referencias**

> [Welcome to Swagger!](https://github.com/swagger-api/swagger-node/blob/master/docs/README.md)

> [Swagger UI](https://github.com/swagger-api/swagger-ui)

## Swagger UI

Se tiene la funcionalidad de [Swagger UI](https://github.com/swagger-api/swagger-ui) para presentar el contenido del archivo `swagger.yml`en una interfaz gráfica, pero yo busco que se sirva la misma interfaz bajo la misma api, es decir que si accedemos a `<dominio>/api-docs` se visualice uan interfaz para poder ejecutar los servicios desde la misma. Para ello utilizare [Swagger-ui-express](https://github.com/scottie1984/swagger-ui-express). Lo implementado lo describo acontinuación:

* Intalar el middleware

```
npm install --save swagger-ui-express
```

Esta líbreria trabaja con tipo de archivo `json`y el archivo que genera la libreria `swagger node` es con formato `yaml` , para solucionar este problema generé una función que lee el archivo `yaml` y escribe el `json` que requerimos, ademas ajusta el valor de la propiedad `host` que determina a donde se realizaran las peticiones que se lancen desde la interfaz `swagger`.

* Constructor de json [buildJsonSwagger.js](api/libs/buildJsonSwagger.js)

* Agregar archivo `routes.js``
```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = ( app ) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    return app;
}
```

* Ejecución con `Grunt` [Gruntfile.js](Gruntfile.js)
```javascript
module.exports = ( grunt ) => {
    let environment = grunt.option('ENV') || 'LOCAL';
    grunt.registerTask( 'buildSwagger' , () => {
        console.log(environment)
        require('./api/libs/buildJsonSwagger')( 'LOCAL')
    });
}
```

Al ejecutar la aplicación se podrá ver la interfaz en la siguiente ruta: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

**Referencias**

> [Swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)

> [Swagger UI](https://github.com/swagger-api/swagger-ui)

## Dockerizado

* `Docker file`
```docker
FROM isortegah/nodejs_8_2_1:v1
ADD package.json /app/user/
ADD package-lock.json /app/user/
ADD api /app/user/
ADD config /app/user/

WORKDIR /app/user
RUN npm install

CMD node app.js
```

* Construcción de imagen

```
docker build -t api-node .
```

* Ejecución de imagen
```
docker run -it -p 3000:3000 < id imagen >
```

* Borrado de contenedores 
```
docker ps -a | egrep Exited | cut -d ' ' -f 1|xargs docker rm
```