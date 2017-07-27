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

**Referencias**

> [Swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)

> [Swagger UI](https://github.com/swagger-api/swagger-ui)