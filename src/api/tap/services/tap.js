'use strict';

/**
 * tap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tap.tap');
