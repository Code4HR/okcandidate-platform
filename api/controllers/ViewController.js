'use strict';

const Controller = require('trails-controller');
const getLayout = require('./utils/getLayout');

module.exports = class ViewController extends Controller {

    home(request, reply) {
        getLayout(request, 'survey', function(error, html) {
            if (error) {
                // handle error.
            }
            reply(html);
        });
    }

    survey(request, reply) {
        getLayout(request, 'survey', function(error, html) {
            if (error) {
                // handle error
            }
            reply(html);
        });
    }

    category(request, reply) {
        getLayout(request, 'survey', function(error, html) {
            if (error) {
                // handle error
            }
            reply(html);
        });
    }

    admin(request, reply) {
        getLayout(request, 'admin', function(error, html) {
            if (error) {
                // handle error.
            }
            reply(html);
        });
    }

    login(request, reply) {
        reply.view('Login');
    }

    results(request, reply) {
        getLayout(request, 'survey', function(error, html) {
            if (error) {
                // handle error.
            }
            reply(html);
        });
    }

};
