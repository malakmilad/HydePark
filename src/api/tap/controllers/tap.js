'use strict';

/**
 * tap controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tap.tap');
