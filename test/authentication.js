'use strict';

const hapiAuthBasic = require('@hapi/basic');

async function register (server, options) {

  await server.register(hapiAuthBasic);

  await server.auth.strategy('basic', 'basic', {validate: async (request, username, password) => {
    const isValid = username === 'lob';
    const credentials = { email: "lob@lob.com" };
      return { isValid, credentials };
    }});

}

const plugin = {
  name: 'authentication',
  version: '0.0.1',
  register: register
};

exports = plugin;
