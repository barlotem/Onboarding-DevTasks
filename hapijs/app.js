// Hapi.js exercise

'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('joi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },{
        method: 'GET',
        path: '/apps',
        handler: (request, h) => {

            return { "apps": [ 1, 2, 3, 4 ] };
        }
    },{
        method: 'POST',
        path: '/apps',
        handler: (request, h) => {
            return { "numberOfApps": request.payload.apps.length};
        },
        options: {
            validate: {
                payload: Joi.object({
                    apps: Joi.array().items(Joi.number())
                })
            }
        }
    }]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();